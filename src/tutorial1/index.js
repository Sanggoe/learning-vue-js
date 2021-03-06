var app = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue!! I'm sanggoe"
    }
});
app.message = "Changed message"

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다.'
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})
//app3.seen = false

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})
app4.todos.push({ text: 'new item' })

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: '안녕하세요! Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: "안녕하세요 Vue!"
    }
})