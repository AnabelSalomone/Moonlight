import Db from '../database/index';
import Mood from '../model/mood'

export default class MoodService {
    public static getAllMoods = async () => {
        const { rows } = await Db.query("SELECT * FROM MOOD", null)
        const moods = rows.map(row => Mood.fromDatabase(row));
        return moods;
    }

    public static getMoodById = async (id: string) => {
        const { rows } = await Db.query(`SELECT * FROM MOOD WHERE ID = $1`, [id])
        return Mood.fromDatabase(rows[0]);
    }

    public static createMood = async (mood: Mood) => {
        // TODO : add real idUser when implementing the security
        return await Db.query(
            `INSERT INTO MOOD(note,creation_date,id_emotion,id_user) VALUES ($1,$2,$3,$4);`,
             [mood.note,mood.creationDate,mood.idEmotion,1]);
    }

    public static deleteMood = async (id: string) => {
        return await Db.query(
            `DELETE FROM MOOD WHERE ID = $1`, [id]);
    }
}