<html>
  <head>
  <style>
  .dropdown {
  list-style: none;
  position: relative;
  border: 1px solid #A2A4B2;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  width: 250px;
  height: 40px;
  cursor: pointer;
  margin: 100px;
  padding: 0;
  
  &__label {
    position: absolute;
    top: -9px;
    left: 15px;
    background: #fff;
    color: #444;
    font-size: .8em;
    font-family: Lato, sans-serif;
  }
  
  &__arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transition: transform 0.5s linear;
    
    &.expanded {
      transform: rotate(-180deg);
    }
  }

  &__list {
    width: 100%;
    position: absolute;
    left: 0;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    box-shadow: 0px 3px 2px 0 #a2a4b2;
    // transition: opacity .1s cubic-bezier(0, 0, 0.38, 0.9), max-height .5s cubic-bezier(0, 0, 0.38, 0.9);
    max-height: 0;
    overflow: hidden;
    opacity: 0;
  }
  
  &__list-container {
    position: relative;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
   &__list-item {
    font-family: Lato, sans-serif;
    color: #444444;
    padding: 10px 0px;
    padding-left: 15px;
    transition: background-color .1s linear, color .1s linear;
    color: #444444;
    list-style-position: inside;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

     &:hover,
     &:focus {
       background-color: #00C2FF;
       color: white;
     }
  }
}

#dropdown__selected {
  font-family: Lato, sans-serif;
  color: #444444;
  padding: 10px 0px;
  padding-left: 15px;
  list-style-position: inside;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
  
  &:focus {
    outline: 1px solid #00C2FF;
  }
}

.open {
  opacity: 1;
  overflow: auto;
  max-height: 15rem;
}
  </style>
<script>
    
class Store {
  constructor(){
    this.nodes = new Map();
  }
  has(node) {
    return this.nodes.has(node);
  }
  set(node,value){
    this.nodes.set(node,value);
  }
  get(node){
      return this.nodes.get(node);
  }
}
const SPACEBAR_KEY_CODE = [0, 32];
const ENTER_KEY_CODE = 13;
const DOWN_ARROW_KEY_CODE = 40;
const UP_ARROW_KEY_CODE = 38;
const ESCAPE_KEY_CODE = 27;

const list = document.querySelector(".dropdown__list");
const listContainer = document.querySelector(".dropdown__list-container");
const dropdownArrow = document.querySelector(".dropdown__arrow");
const listItems = document.querySelectorAll(".dropdown__list-item");
const dropdownSelectedNode = document.querySelector("#dropdown__selected");
const listItemIds = [];
const store = new Store();

dropdownSelectedNode.addEventListener("click", e =>
                                      toggleListVisibility(e)
                                     );
dropdownSelectedNode.addEventListener("keydown", e =>
                                      toggleListVisibility(e)
                                     );

listItems.forEach(item => listItemIds.push(item.id));

listItems.forEach(item => {
  item.addEventListener("click", e => {
    setSelectedListItem(e);
    // closeList();
  });

  item.addEventListener("keydown", e => {
    switch (e.keyCode) {
      case ENTER_KEY_CODE:
        setSelectedListItem(e);
        // closeList();
        return;

      case DOWN_ARROW_KEY_CODE:
        focusNextListItem(DOWN_ARROW_KEY_CODE);
        return;

      case UP_ARROW_KEY_CODE:
        focusNextListItem(UP_ARROW_KEY_CODE);
        return;

      case ESCAPE_KEY_CODE:
        closeList();
        return;

      default:
        return;
    }
  });
});

function setSelectedListItem(e) {
  let selected = e.target;
  if (!store.has(dropdownSelectedNode)) {
    store.set(dropdownSelectedNode,[selected]);
  } else {
    store.set(dropdownSelectedNode,store.get(dropdownSelectedNode).concat(selected));
  }
  dropdownSelectedNode.innerHTML = null;
  let values = store.get(dropdownSelectedNode);
  console.log(values,"va");
  values.forEach(v =>  dropdownSelectedNode.appendChild(document.createTextNode(v.innerText)))
}

function closeList() {
  list.classList.remove("open");
  dropdownArrow.classList.remove("expanded");
  listContainer.setAttribute("aria-expanded", false);
}

function toggleListVisibility(e) { 
  let openDropDown =
      SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === ENTER_KEY_CODE;

  if (e.keyCode === ESCAPE_KEY_CODE) {
    closeList();
  }

  if (e.type === "click" || openDropDown) {
    list.classList.toggle("open");
    dropdownArrow.classList.toggle("expanded");
    listContainer.setAttribute(
      "aria-expanded",
      list.classList.contains("open")
    );
  }

  if (e.keyCode === DOWN_ARROW_KEY_CODE) {
    focusNextListItem(DOWN_ARROW_KEY_CODE);
  }

  if (e.keyCode === UP_ARROW_KEY_CODE) {
    focusNextListItem(UP_ARROW_KEY_CODE);
  }
}

function focusNextListItem(direction) {
  const activeElementId = document.activeElement.id;
  if (activeElementId === "dropdown__selected") {
    document.querySelector(`#${listItemIds[0]}`).focus();
  } else {
    const currentActiveElementIndex = listItemIds.indexOf(
      activeElementId
    );
    if (direction === DOWN_ARROW_KEY_CODE) {
      const currentActiveElementIsNotLastItem =
            currentActiveElementIndex < listItemIds.length - 1;
      if (currentActiveElementIsNotLastItem) {
        const nextListItemId = listItemIds[currentActiveElementIndex + 1];
        document.querySelector(`#${nextListItemId}`).focus();
      }
    } else if (direction === UP_ARROW_KEY_CODE) {
      const currentActiveElementIsNotFirstItem =
            currentActiveElementIndex > 0;
      if (currentActiveElementIsNotFirstItem) {
        const nextListItemId = listItemIds[currentActiveElementIndex - 1];
        document.querySelector(`#${nextListItemId}`).focus();
      }
    }
  }
}
    </script>
  </head>
  <body>
<ul class="dropdown">
        <li id="dropdown-label" class="dropdown__label">Label</li>
        <li
          role="button"
          aria-labelledby="dropdown-label"
          id="dropdown__selected"
          tabindex="0">Option 1
        </li>
        <svg
          class="dropdown__arrow"
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill-rule="evenodd"
        >
          <title>Open drop down</title>
          <path d="M10 0L5 5 0 0z"></path>
        </svg>
        <li aria-expanded="false" role="list" class="dropdown__list-container">
          <ul class="dropdown__list">
            <li class="dropdown__list-item" tabindex="0" id="option-1" data-value="option 1">
              Option 1
            </li>
            <li class="dropdown__list-item" tabindex="0" id="option-2" data-value="option 2">
              Option 2 is really longgggggggggggggggg
            </li>
          </ul>
        </li>
</ul>
</body>
</html>
