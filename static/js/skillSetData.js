$(document).ready(function() {// demo data
    var data = {
    name: 'My Skill Set',
    children: [
      {
        name: 'Networking',
        children: [
          { name: 'Routing protocols like EIGRP and OSPF' },
          { name: 'Switching protocols like STP' },
          { name: 'TCP/IP stack'},
          { name: 'Network Troublshooting'},
          { name: 'CCNA'}
        ]
      },
      {
        name: 'Web Development',
        children: [
          { name: 'Front-End',
            children: [
              { name: 'HTML'},
              { name: 'CSS'},
              { name: 'AngularJS'},
              { name: 'jQuery'},
              { name: 'Jade templating language'}
            ]
          },
          { name: 'Back-End',
            children: [
              { name: 'NodeJS'},
              { name: 'Flask framework'},
              { name: 'PHP'},
              { name: 'AJAX'}
            ]
          }
        ]
      },
      {
        name: 'Database',
        children: [
          { name: 'SQL language'},
          { name: 'Experience with MySQL'},
          { name: 'Experience with MariaDB'},
          { name: 'Experience with PostgreSQL'},
          { name: 'Experience with MangoDB'}
        ]
      },
      {
        name: 'Programming Languages',
        children: [
          { name: 'JAVA (primary language)'},
          { name: 'C/C++'},
          { name: 'javascript'},
          { name: 'Python'}
        ]
      },
      { name: 'Android Development'},
      { name: 'Deep Learning & AI'}
    ]
  }

  // define the item component
  Vue.component('item', {
    template: '#item-template',
    props: {
      model: Object
    },
    data: function () {
      return {
        open: false
      }
    },
    computed: {
      isFolder: function () {
        return this.model.children &&
          this.model.children.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      },
      changeType: function () {
        if (!this.isFolder) {
          Vue.set(this.model, 'children', [])
          this.addChild()
          this.open = true
        }
      }
    }
  })

  // boot up the demo
  var demo = new Vue({
    el: '#demo',
    data: {
      treeData: data
    }
  })
})