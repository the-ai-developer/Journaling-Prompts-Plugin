import { Plugin, Modal, App, Notice, moment, PluginSettingTab, Setting } from "obsidian";

interface JournalSettings {
	personality: string;
	name: string;
}

type QuestionMap = {
	[personalityType: string]: string[];
}

const DEFAULT_SETTINGS: JournalSettings = {
	name: 'Your Awesome Name',
	personality: 'ambivert'
}

const QUESTIONS: QuestionMap = {
	introvert : [
		"How do I feel about social interactions?",
		"What aspects of being an introvert do I embrace most?",
		"Is there something I’ve always wanted to try or learn?",
		"Do you need time to think before speaking?",
		"Do you find crowded places overwhelming?"
	],
	extrovert : [
		"How do I handle silence during social conversation?",
		"What aspects of being an extrovert do I embrace most?",
		"Is there something I’ve always wanted to try or learn?",
		"Do you prefer group activities over solo ones?",
		"Do you enjoy being the center of attention?"
	],
	ambivert : [
		"Do I crave alone time or social time more?",
		"What aspects of being an ambivert do I embrace most?",
		"Is there something I’ve always wanted to try or learn?",
		"How can I create a space for myself to recharge?",
		"Do I find it easier to express myself  in writing rather than speaking?"
	]
}

type PersonalityMap = {
	"personality_key" : string;
	"personality_value" : string;
}


const PERSONALITY: PersonalityMap[] = [
	{
		"personality_key" : "Introvert", "personality_value": "introvert",
	},
	{
		"personality_key" : "Extrovert", "personality_value": "extrovert",
	},
	{
		"personality_key" : "Ambivert", "personality_value": "ambivert",
	}


]




export default class AutoJournalPlugin extends Plugin {
  settings: JournalSettings;

  async onload() {
    await this.loadSettings();

    this.addCommand({
      id: "start-journaling",
      name: "Start Journaling",
      callback: () => {
        new JournalModal(this.app, QUESTIONS[this.settings.personality], this.settings.name).open();
      },
    });
    this.addSettingTab(new JournalSettingTab(this.app, this));
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

class JournalModal extends Modal {
  answers: { [key: string]: string } = {};
  questions: string[];
  name: string;
  settings: JournalSettings;

  constructor(app: App, questions: string[], name: string) {
    super(app);
    this.questions = questions;
	this.name = name;
  }

  onOpen() {
    const { contentEl } = this;

    contentEl.empty();
    contentEl.createEl("h2", { text: 'Hello {0}!'.format(this.name) });

    this.questions.forEach((question, index) => {
      contentEl.createEl("p", { text: question });
      const input = contentEl.createEl("input", { type: "text", cls: "journal-input" });
      input.addEventListener("input", (e) => {
        this.answers[`q${index}`] = (e.target as HTMLInputElement).value;
      });
    });

    const submitButton = contentEl.createEl("button", { text: "Submit" });
    submitButton.addEventListener("click", () => {
      this.saveAnswers();
      this.close();
    });
  }

  async saveAnswers() {
    const timestamp = moment().format("YYYY-MM-DD HH:mm:ss");
    const noteContent = [
      `# Journal Entry - ${timestamp}`,
      "",
      "## Answers",
      ...this.questions.map((q, i) => `${i + 1}. **${q}** ${this.answers[`q${i}`] || "Not answered"}`),
    ].join("\n");

    const fileName = `Journal-${moment().format("YYYY-MM-DD")}.md`;
    await this.app.vault.create(fileName, noteContent);
    new Notice(`Journal saved as ${fileName}!`);
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
}

class JournalSettingTab extends PluginSettingTab {
  plugin: AutoJournalPlugin;

  constructor(app: App, plugin: AutoJournalPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
		const {containerEl} = this;


		containerEl.empty();

		containerEl.createEl("h2", { text: "Auto Journal Settings" });

		new Setting(containerEl)
			.setName('Name')
			.setDesc('Your awesome name')
			.addText(text => text
				.setPlaceholder('Your Awesome Name')
				.setValue(this.plugin.settings.name)
				.onChange(async (value) => {
					this.plugin.settings.name = value;
					await this.plugin.saveSettings();
				}));


		new Setting(containerEl)
			.setName('Personality Type')
			.setDesc('Select your personality')
			.addDropdown((dropdown) => {
				// Dynamically add options from the PERSONALITY array
				const options = PERSONALITY.reduce((acc, personality) => {
					acc[personality.personality_value] = personality.personality_key;
					;
					return acc;
				}, {} as Record<string, string>);
				dropdown.addOptions(options);
				dropdown.setValue(this.plugin.settings.personality)
				dropdown.onChange(
					async(value) => {
						this.plugin.settings.personality = value;
						await this.plugin.saveSettings();
					}
				)
			});


    // new Setting(containerEl)
    //   .setName("Custom Questions")
    //   .setDesc("Enter your journaling prompts (one per line).")
    //   .addTextArea((text) => {
    //     text
    //       .setValue(this.plugin.settings.customQuestions.join("\n"))
    //       .onChange(async (value) => {
    //         this.plugin.settings.customQuestions = value.split("\n").filter((q) => q.trim());
    //         await this.plugin.saveSettings();
    //       });
    //     text.inputEl.rows = 5;
    //     text.inputEl.cols = 50;
    //   });
  }
}