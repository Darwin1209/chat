export const template: string = `
<div class="wrap-link">
  <a class="link link_profile" href="profile">Профиль</a>
</div>
<form class="form form-search">
  <div class="wrapper-input-search">
    <div class="input-img"></div>
  </div>
  <input type="text" class="form-search__input" placeholder="Поиск" />
</form>
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
