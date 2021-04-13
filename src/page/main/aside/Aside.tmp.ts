export const template: string = `
  {{#if context.modal.active}} 
    <div class="chat-modal">
      <form class="chat-modal__form" data-type={{context.modal.action}}>
        <button class="chat-modal__cross" type="reset">
          <div class="plus plus_rotate"></div>
        </button>
        <p class="chat-modal__title">{{context.modal.title}}</p>
        <div class="chat-modal__wrapper-input">
          <label class="chat-modal__label">Заголовок чата</label>
          <input type="text" class="chat-modal__input" required/>
        </div>
        <button type="submit" class="chat-modal__submit">
          {{context.modal.button}}
        </button>
        <p class="chat-modal__response"></p>
      </form>
    </div>
  {{/if}}

  <div class="wrap-link">
    <a class="link link_profile" href="profile">Профиль</a>
  </div>
  <form class="form form-search">
    <div class="wrapper-input-search">
      <div class="input-img"></div>
    </div>
    <input type="text" class="form-search__input" placeholder="Поиск" />
  </form>
  <div class="wrapper-button">
    <button type="submit" class="button-chat add-chat">Добавить чат</button>
  </div>
  <ul class="chats-list">
    {{#each list}}
      <li class="chats-list__item">
      <div class="chat {{#if this.active}}chat_active{{/if}}" data-chat={{this.id}}>
        <div class="chat__wrap-img">
          {{#if this.avatar}}<img class="chat__img" src={{this.avatar}}/>{{/if}}
        </div>
        <div>
          <p class="chat__name">{{this.title}}</p>
          <p class="chat__message">{{this.message}}</p>
        </div>
        <div class="chat__wrap-date">
          <div class="chat__date">{{this.date}}</div>
          {{#if this.count}}<div class="chat__count">{{this.count}}</div>{{/if}}
        </div>
      </div>
      </li>
    {{/each}}
  </ul>
`
