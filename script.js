const vue = new Vue({
  el: '#todoArea',
  data: {
    todos: []
  },
  methods: {
    deleteTodo: function (index) {
      this.todos.splice(index, 1)
      saveStorage(storageKey, this.todos)
    }
  }
})

const saveStorage = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
}

const readStorage = (key) => {
  let obj = localStorage.getItem(key)
  return JSON.parse(obj)
}

const addTodo = (todo) => {
  vue.todos.push({
    text: todo
  })
  saveStorage(storageKey, vue.todos)
}

const storageKey = 'todoList'

vue.todos = readStorage(storageKey)

const btn = document.getElementById("addBtn")
btn.addEventListener("click", () => {
  addTodo(document.getElementById("todo").value)
})