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
}