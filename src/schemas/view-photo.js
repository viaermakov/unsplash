import { schema } from 'normalizr';

const relatedPhotos = new schema.Entity('items', {}, {
    processStrategy: (entity) => {
        return {
            id: entity.id,
            label: entity.description || "",
            likes: entity.likes,
            url: entity.urls.small,
            avatar: entity.user.profile_image.small,
            user: entity.user.username
        }
    }
});

export const relatedPhotosSchema = new schema.Array(relatedPhotos);