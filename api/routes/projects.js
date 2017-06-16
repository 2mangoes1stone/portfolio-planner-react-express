const express = require('express')

const router = express.Router()

const projects = [
    {
        title: 'Portfolio website',
        skills: ['html', 'css', 'design', 'wireframing']
    },
    {
        title: 'Ruby command line app',
        skills: ['ruby', 'command line', 'user stories']
    },
    {
        title: 'Rails two-sided marketplace',
        skills: ['ruby', 'rails', 'html', 'css', 'design', 'wireframing', 'user stories']
    },
    {
        title: 'React + Node.js + MongoDB client project',
        skills: ['javascript', 'node.js', 'express', 'react', 'html', 'css', 'design', 'wireframing', 'user stories', 'project management', 'team management']
    }
]

router.get('/projects', (req, res) => {
  res.json(projects)
})

module.exports = router
// same as ==> export default router