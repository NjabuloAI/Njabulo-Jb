// deploy.js

const axios = require('axios');
const { exec } = require('child_process');
require('dotenv').config();

const platforms = {
  koyeb: {
    name: 'Koyeb',
    deploy: async () => {
      const apiKey = process.env.KOYEB_API_KEY;
      const appName = process.env.KOYEB_APP_NAME;

      try {
        const response = await axios.post(`https://app.koyeb.com/v1/apps/${appName}/deploy`, {
          // Deployment configuration
        }, {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        });

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    renderPanel: () => {
      console.log('Rendering Koyeb deployment panel...');
    }
  },
  heroku: {
    name: 'Heroku',
    deploy: async () => {
      const appName = process.env.HEROKU_APP_NAME;

      try {
        await new Promise((resolve, reject) => {
          const command = `heroku git:remote -a ${appName} && git push heroku main`;
          exec(command, (error, stdout, stderr) => {
            if (error) {
              reject(error);
            } else {
              resolve(stdout);
            }
          });
        });

        console.log('Deployed to Heroku!');
      } catch (error) {
        console.error(error);
      }
    },
    renderPanel: () => {
      console.log('Rendering Heroku deployment panel...');
    }
  }
};

class Hosting {
  constructor(platform) {
    this.platform = platforms[platform];
    if (!this.platform) {
      throw new Error(`Unsupported platform: ${platform}`);
    }
  }

  async deploy() {
    await this.platform.deploy();
  }

  renderPanel() {
    this.platform.renderPanel();
  }
}

const main = async () => {
  const platform = process.argv[2];

  if (!platform) {
    console.error('Please specify a platform (koyeb or heroku)');
    return;
  }

  const hosting = new Hosting(platform);
  hosting.renderPanel();
  await hosting.deploy();
};

main();