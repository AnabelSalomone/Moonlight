import express from 'express';
import MoodService from '../services/moodService';
const router = express.Router();

/* GET moods listing. */
router.get('/', async function (req, res, next) {
  const moods = await MoodService.getAllMoods();
  // If we do have the moods list we send it
  if (moods != null) {
    res.send(moods);
    return;
  }
  res.status(500)
  res.send("Error : can't find the moods")
});

/* GET mood by id. */
router.get('/:id', async function (req, res, next) {
  const { id } = req.params;
  const mood = await MoodService.getMoodById(id);
  // If we do have the moods list we send it
  if (mood != null) {
    res.send(mood);
    return;
  }
  res.status(500)
  res.send("Error : can't find the mood")
});

/* POST mood. */
router.get('/', async function (req, res, next) {
  const moods = await MoodService.getAllMoods();
  // If we do have the moods list we send it
  if (moods != null) {
    res.send(moods);
    return;
  }
  res.status(500)
  res.send("Error : can't find the moods")
});

/* DELETE mood. */
router.get('/', async function (req, res, next) {
  const moods = await MoodService.getAllMoods();
  // If we do have the moods list we send it
  if (moods != null) {
    res.send(moods);
    return;
  }
  res.status(500)
  res.send("Error : can't find the moods")
});

export default router
module.exports = router;
