import { schema } from 'normalizr';

const allPhotoSchema = new schema.Entity('items', {}, {
    processStrategy: (entity) => {
        return {
            id: entity.id,
            label: entity.description || "",
            likes: entity.likes,
            url: entity.urls.full,
            user: entity.user.username
        }
    }
});

export const allPhotosSchema = new schema.Array(allPhotoSchema);