export const template: string = `
  {{#if context.modal.active}} 
    <div class="chat-modal">
      <form class="chat-modal__form" data-type={{context.modal.action}}>
        <button class="chat-modal__cross" type="reset">
          <div class="plus plus_rotate"></div>
        </button>
        <p class="chat-modal__title">{{context.modal.title}}</p>
        <div class="chat-modal__wrapper-input">
          <label class="chat-modal__label">Логин</label>
          <input type="text" class="chat-modal__input" required/>
        </div>
        <button type="submit" class="chat-modal__submit">
          {{context.modal.button}}
        </button>
        <p class="chat-modal__response"></p>
      </form>
    </div>
  {{/if}}


  <div class="header-view">
    <div class="align">
      <div class="header-view__wrap-img">
        {{#if chat.avatar}}<img class="chat__img" src={{this.avatar}}/>{{/if}}
      </div>
      <div class="header-view__name">{{chat.title}}</div>
    </div>
    <button class="header-view__button">
      <div class="button">
        <div class="button__dot"></div>
        <div class="button__dot"></div>
        <div class="button__dot"></div>
      </div>
    </button>

    <div class="header-view__actions actions">
      <button class="actions__button user-add">
        <div class="plus"></div>
        <span>Добавить пользователя</span>
      </button>
      <button class="actions__button user-remove">
        <div class="plus plus_rotate"></div>
        <span>Удалить пользователя</span>
      </button>
    </div>
  </div>

  <section class="messages">
    <ul class="messages-list">
    {{#each list}}

      <li class="messages-list__item">
        {{#if this.foto}}
        <li class="messages-list__item">
        <div class="message {{#if this.me}}message_me{{else}}message_opponent{{/if}} message_type-image">
          <div class="message__foto">
            <img src="{{this.src}}" alt="" />
          </div>
          <div class="message__date">{{this.date}}</div>
        </div>
      </li>
        {{else}}
        <div class="message {{#if this.me}}message_me{{else}}message_opponent{{/if}} message_type-text">
          <div class="message__text">{{this.content}}</div>
          <div class="message__date">{{this.date}}</div>
        </div>
        {{/if}}
      </li>

    {{/each}}
    </ul>
  </section>
  {{#if chat.title}}
  <form action="" class="form form-submit" data-type="message">
    <button class="form-submit__additional">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        class="form-submit__img"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.18662 13.5L14.7628 5.92389L15.7056 6.8667L8.12943 14.4428L7.18662 13.5Z"
          fill="#999999"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.70067 16.0141L17.2768 8.43793L18.2196 9.38074L10.6435 16.9569L9.70067 16.0141Z"
          fill="#999999"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.0433 21.3567L22.6195 13.7806L23.5623 14.7234L15.9861 22.2995L15.0433 21.3567Z"
          fill="#999999"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5574 23.8708L25.1335 16.2946L26.0763 17.2374L18.5002 24.8136L17.5574 23.8708Z"
          fill="#999999"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.5574 23.8709C14.9423 26.486 10.7118 26.4954 8.10831 23.8919C5.50482 21.2884 5.51424 17.0579 8.12936 14.4428L7.18655 13.5C4.0484 16.6381 4.0371 21.7148 7.16129 24.839C10.2855 27.9632 15.3621 27.9518 18.5003 24.8137L17.5574 23.8709Z"
          fill="#999999"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.6195 13.7806L23.5623 14.7234C26.003 12.2826 26.0118 8.3341 23.5819 5.90417C21.152 3.47424 17.2035 3.48303 14.7627 5.92381L15.7055 6.86662C17.6233 4.94887 20.7257 4.94196 22.6349 6.85119C24.5441 8.76042 24.5372 11.8628 22.6195 13.7806Z"
          fill="#999999"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.70092 16.0144C7.95751 17.7578 7.95123 20.5782 9.68689 22.3138C11.4226 24.0495 14.2429 24.0432 15.9863 22.2998L15.0435 21.357C13.8231 22.5774 11.8489 22.5818 10.6339 21.3668C9.41894 20.1518 9.42334 18.1776 10.6437 16.9572L9.70092 16.0144Z"
          fill="#999999"
        />
      </svg>
    </button>
    <input
      class="input form-submit__text"
      type="text"
      placeholder="Сообщение"
    />
    <button class="form-submit__send" type="submit"></button>
  </form>
  {{/if}}
`
