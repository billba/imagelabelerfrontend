import { ActionObject } from './ActionObject';

const ROOT_URL = 'image-labeler-api.azurewebsites.net';

export const updateAppName = (text: string) : ActionObject => ({
    type: 'UPDATE_APP_NAME',
    name: text  
})

export const loadImagesAndLabels = () : ActionObject => ({
    type: 'LOAD_IMAGES_AND_LABELS'
})
//create and export methods ('action creators') that will return ActionObject types