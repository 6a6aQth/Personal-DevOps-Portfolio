Here’s an updated version with the added emphasis on **restricting the `main` branch clone** and allowing users to **download the repository**:  

---

# 🚀 Michael Lumanga's DevOps Portfolio  

Welcome to my **DevOps Portfolio**, a showcase of my **projects, experience, testimonials, and technical expertise** in DevOps, automation, cloud infrastructure, and monitoring.  

## 🛠️ Tech Stack & Tools  
- **Frontend:** [Next.js, React, Typescript]  
- **Backend:** [Node.js]  
- **Monitoring:** **Sentry** (Error tracking & performance monitoring)  
- **Issue Tracking:** **Jira** (Bug & feature request tracking)  
- **Version Control:** Git & GitHub  

## 🔧 Setup & Installation  

To clone and run this repository locally:  

```bash
# Clone the repository
git clone https://github.com/yourusername/devops-portfolio.git

# Navigate into the project directory
cd devops-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🛑 **Cloning Restrictions**  

⚠️ **Cloning of the `main` branch is restricted** to prevent unauthorized access.  

To ensure the **`main` branch** cannot be cloned, I’ve implemented a **GitHub Actions** workflow that will **block cloning attempts to the `main` branch**. If you try to clone or pull directly from the `main` branch, you will receive an error message.  

🔹 **Important:** You can still clone and access other branches of the repository.  
🔹 **Note:** **Downloading the repository** is still possible through GitHub’s **Download ZIP** option.  


## 🛠️ Configure Sentry  

To enable Sentry for monitoring and error tracking:  

1. **Sign up** at [Sentry.io](https://sentry.io) and create a new project.  
2. **Get your authentication token** from Sentry.  
3. **Set up environment variables**:  

   ```bash
   SENTRY_AUTH_TOKEN=your-sentry-auth-token
   ```

4. **Restart the development server:**  

   ```bash
   npm run dev
   ```

## 🐞 Bug Reports & Issue Tracking  

- **Report Bugs & Issues:** If you encounter any issues, please report them via the **bug report form** on the website.  
- **Track Issues on Jira:** I manage project tasks and issues using **Jira**, ensuring a streamlined workflow.  

## 📌 Contributing  

Want to contribute? Feel free to fork this repo, make improvements, and submit a **pull request**!  

## 📞 Contact  

Have questions or feedback? Reach out to me via:  
- **Email:** qylumanga@gmail.com  

---

