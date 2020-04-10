export default class Mood {
    constructor(
        public id: number,
        public note: number,
        public creationDate: Date,
        public idEmotion: number,
        public idStatus: number
    ){}

    static fromDatabase(databaseObject: any): Mood {
        return new Mood(
            databaseObject.id,
            databaseObject.note,
            databaseObject.creation_date,
            databaseObject.id_emotion,
            databaseObject.id_status,
        );
    }

}