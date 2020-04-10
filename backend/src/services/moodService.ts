import Db from '../database/index';

export default class MoodService {
    public static getAllMoods = async () => {
        const { rows } = await Db.query("SELECT * FROM MOOD", null)
        return rows;
    }

    public static getMoodById = async (id: string) => {
        const { rows } = await Db.query(`SELECT * FROM MOOD WHERE ID = $1`, [id])
        return rows[0];
    }

    public static createMood = async (mood: any) => {
        return await Db.query(
            `INSERT INTO MOOD(note,creation_date,id_emotion,id_user) VALUES ($1,$2,$3,$4);`,
             [mood.note,mood.creationDate,mood.idEmotion,mood.idUser]);
    }

    public static deleteMood = async (id: string) => {
        return await Db.query(
            `DELETE FROM MOOD WHERE ID = $1`, [id]);
    }
}