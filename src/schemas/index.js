import { normalize } from 'normalizr';

export function normalizeData(data, schema){
    const normalizeData = normalize(data, schema);
    const { entities, result } = normalizeData;

    return {
        byID: entities.items,
        IDs: result
    }
}