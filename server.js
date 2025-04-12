import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views')); // Explicitly set the views directory

// Serve static files from the "public" folder
app.use(express.static(join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index'); // views/index.ejs
});

app.get('/skills', (req, res) => {
  const skillsData = {
    languages: ['Python', 'JavaScript', 'HTML', 'CSS', 'C'],
    frameworks: ['Flask', 'Django'],
    ai_ml: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Jupyter', 'PyTorch', 'TensorFlow', 'Text-to-Speech'],
    databases: ['MySQL', 'Git', 'GitHub']
  };

  res.render('skills', skillsData);  // rendering the skills.ejs file with the data
});



app.get('/projects', (req, res) => {
  res.render('projects'); // views/projects.ejs
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
