var app = new Vue({
    el: '#app',
    data: {
        todoText: "",
        todos: null
    },
    mounted: function () {
        var todos = localStorage.getItem('pwa-test-todos');
        if(todos){
            this.todos = JSON.parse(todos);
        }else{
            this.todos = [];
        }
        this.$refs.input.focus();
    },
    methods: {
        addTodo: function(){
            this.todos.push({
                done: false,
                text: this.todoText
            });
            this.todoText = "";
            this.saveTodos();
        },
        checkTodo: function($index){
            this.todos[$index].done = !this.todos[$index].done;
            this.saveTodos();
        },
        removeTodo: function ($index) {
            this.todos.splice($index, 1);
            this.saveTodos();
        },
        saveTodos: function () {
            localStorage.setItem('pwa-test-todos', JSON.stringify(this.todos));
        }
    }
  })