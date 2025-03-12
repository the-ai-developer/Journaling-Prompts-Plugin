# Journaling Prompts Plugin 📝✨

Hey dev fam! Welcome to **Journaling Prompts Plugin**—a lightweight Obsidian plugin that sparks daily reflection with personality-tailored journaling prompts! This slick gem turns your vibe into deep thoughts, saving them in neatly timestamped notes. Built for simplicity with a sleek UI, it’s ready to roll with future LLM-powered insights to uncover who you are and where you’re at. Whether you’re an introvert, extrovert, or ambivert, we’ve got your back—ready to journal like a boss? Let’s dive in!

---

## What’s the Deal? 🌟
Picture this: you fire up Obsidian, and bam—Journaling Prompts Plugin greets you with a “Hello [Your Name]!” and questions like “How do I feel about social interactions?” (introvert vibes) or “Do I enjoy being the center of attention?” (extrovert energy). You jot down your thoughts, hit submit, and it’s all neatly saved. We’re prepping to add LLM magic to analyze your answers and drop wisdom like, “You’re thriving, but maybe recharge solo for a bit.” It’s journaling with a personal twist—Obsidian-style!

### Current Features 🔥
- **Personality-Based Prompts**: Pick introvert, extrovert, or ambivert—get questions that match your vibe.
- **Custom Name**: See a friendly “Hello [Your Name]!” in the modal.
- **Note Saving**: Answers land in a tidy `.md` file with a timestamp (e.g., `Journal-2025-02-22.md`).
- **Settings**: Tweak your name and personality type in a slick settings tab.

---

## How to Run This Gem

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/the-ai-developer/Journaling-Prompts-Plugin.git
cd journaling-prompts-plugin
```

### 2️⃣ Install the Goodies

Get the dependencies sorted with:

```bash
npm install
```

### 3️⃣ Link to Obsidian

Find your Obsidian vault (where your notes chill). Drop this into `.obsidian/plugins`:

```bash
ln -s /path/to/journaling-prompts-plugin /path/to/vault/.obsidian/plugins/journaling-prompts-plugin
```

Or just copy the folder over—no stress.

### 4️⃣ Build It

```bash
npm run dev
```

Keep this running—it auto-compiles your `main.ts`.

### 5️⃣ Launch It

Open Obsidian, hit **Settings > Community Plugins**. Turn off **Safe Mode** if it’s on, then enable **Journaling Prompts Plugin**.\
Run **“Start Journaling”** (`Ctrl+P` or `Cmd+P`) and start reflecting!

---

## Tips & Tricks 💡

- Set your personality in settings—**introvert, extrovert, or ambivert**—and watch the prompts shift!
- Add your name for that personal **“Hello!”** vibe.
- Test all personality types to see how the questions hit.
- Go wild with weird inputs and let us know what breaks—we’ll fix it together!

---

## Colab Time! 🤝

This is **YOUR** playground, dev squad! Here’s how to jump in:

- **Fork the repo** and run wild.
- Got a killer feature? **Send a Pull Request!**
- Spot bugs or have ideas? **Drop ‘em in the Issues tab.**
- Wanna chat? **Hit up Discussions**—let’s brainstorm over virtual coffee! ☕

---

## Future Upgrades & Creative Ideas 🚀✨

### UI Glow-Up 🌈

- Add a sleek **progress bar** that fills as you answer—make it pulse or glow! ✨
- Toggle between **minimalist, vibrant, or custom themes** to match your Obsidian aesthetic. 🎨
- Spice up the modal with **SVG icons**—like a pencil for prompts or a brain for insights. 🖌️
- Throw in **fade-ins or slide-ups** to make that modal feel alive! 🎥

### Prompt Power-Ups ⚡

- Pull **dynamic prompts** based on the day, weather (via API), or past answers. 🌤️
- Add a quick **“How’s your mood?”** picker to tweak prompts on the fly. 😊😟
- Bring back the **textarea** to craft your own questions per personality! ✍️

### LLM Magic 🧠

- Hook up an **LLM (OpenAI, local models)** to analyze answers and drop realizations like, *“You’re leaning introvert today—need some quiet time?”* 🧐
- Build a **mini-quiz** to auto-set your personality type from responses. 🎯
- Parse answers over time for a **“vibe graph”** in your notes. 📊

### Note Ninjas 📓

- Auto-add **tags** (e.g., `#introvert`, `#reflection`) or **mood scores** to notes. 🏷️
- Save journals as **PDF or CSV** for offline flexing. 📄
- Compile a week’s entries into a **“Weekly Reflection”** note. 📅

### Wild Ideas 🌌

- Dictate answers with **speech-to-text**—journal hands-free! 🎙️
- Hit a **“Surprise Me!”** button for random questions across personalities. 🎲
- Pull **crowd-sourced prompts** from a shared repo or API. 🌍

---

## The Crew Behind It 👨‍💻👩‍💻

Kicked off by **@Mukilan** (the mastermind!), with big props to our **Build2Learn'24 Team** for the code vibes. Now it’s **YOUR** turn to take it to the stars! 🚀

---

## License 📜

This bad boy’s rocking the **MIT License**—use it, tweak it, share it, just keep the copyright nod. Check the `LICENSE` file for the deets!

Happy Journaling! ✨


