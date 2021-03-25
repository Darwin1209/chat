export const template: string = `
{{#if context.changeAvatar}}
  <div class="modal-wrapper">
    <div class="modal">
      <p class="modal__title">Загрузить файл</p>
      <a href="" class="modal__link">Выбрать файл на<br />компьютере</a
      ><button class="modal__submit">Поменять</button>
    </div>
  </div>
{{/if}}

<a href="/" class="back">
  <img src="./img/circle.svg" alt="" />
</a>
<main class="profile">
  <div class="profile__wrap-person person">
    <div class="person__logo">
      <div class="person__wrap-img">
        <img src="./img/logo-person.png" alt="" class="person__img" />
      </div>
      <div class="person__change">Поменять аватар</div>
    </div>
    <p class="person__name">{{#if context.profile}}{{tcontext.name}}{{else}}&nbsp;{{/if}}</p>
  </div>
  <form class="profile__wrap-info info">

    {{#each context.fields}}

      <div class="info__item">
        <label for="" class="info__label">{{this.label}}</label>
        <input
          {{#if this.disabled}}disabled{{/if}}
          type="{{this.type}}"
          class="info__input"
          name="{{this.name}}"
          value="{{this.value}}"
          data-valid={{this.validation}}
        />
        <label class="info__valid">{{this.validText}}</label>
      </div>

    {{/each}}

    {{#if context.changeData}} 
      <button type="submit" class="info__submit info__submit_data">
        Сохранить
      </button> 
    {{/if}}

    {{#if context.changePass}}
      <button type="submit" class="info__submit info__submit_pass">
        Сохранить
      </button>
    {{/if}}

  </form>

  {{#if context.profile}}
  <ul class="list-action">
    <li class="list-action__item">
      <a href="change-data" class="list-action__link"
        >Изменить данные</a
      >
    </li>
    <li class="list-action__item">
      <a href="change-pass" class="list-action__link">
        Изменить пароль
      </a>
    </li>
    <li class="list-action__item">
      <button href="" class="list-action__link list-action__link_red button_logout">Выйти</button>
    </li>
  </ul>
  {{/if}}

</main>
`
