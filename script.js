const storageKey = 'todoList'

const readStorage = (key) => {
  let obj = localStorage.getItem(key)
  return JSON.parse(obj)
}

const saveStorage = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
}

const vue = new Vue({
  el: '#todoArea',
  data: {
    todos: readStorage(storageKey)
  },
  methods: {
    addTodo: function (todo) {
      this.todos.push({
        text: todo
      })
      saveStorage(storageKey, this.todos)
    },
    deleteTodo: function (index) {
      this.todos.splice(index, 1)
      saveStorage(storageKey, this.todos)
    }
  }
})

const btn = document.getElementById("addBtn")
btn.addEventListener("click", () => {
  vue.addTodo(document.getElementById("todo").value)
})