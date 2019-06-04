export class Character{
    static fromJson(jsonData: any): Character {
        return Object.assign(new Character(), jsonData);
    }
}