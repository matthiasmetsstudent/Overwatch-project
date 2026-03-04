export interface Roles {
    "id": string,
    "name": string,
    "description": string,
    "iconUrl": string,
    "isFrontline": boolean;
    
}

export interface Heroes {
    "id": string,
    "name": string,
    "description": string,
    "age": number,
    "isActive": boolean,
    "birthDate": string,
    "imageUrl": string,
    "difficulty": string,
    "abilities": string[],
    "nationality": string,
    "role": Roles;
}
