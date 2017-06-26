
export type ActionObject = {
    type: 'UPDATE_APP_NAME',
    name: string
} | {
    type: 'GOT_IMAGES_AND_LABELS',
    labels: string[],
    images: string[]
} | {
    type: 'LOAD_IMAGES_AND_LABELS'
}
