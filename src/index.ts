import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderBlock, renderToast } from './lib.js'

const avatarUrl = '/path/to/image.png';
const dateIn = new Date('2022-05-21');
const dateOut = new Date('2022-05-27');

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Maks', avatarUrl, 0);
  renderSearchFormBlock(dateIn, dateOut);
  renderSearchStubBlock();
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
