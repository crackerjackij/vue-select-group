# vue-select-group

> **Grouping select Tag in data**

## Documentation
Too easy!!
[DEMO](https://crackerjackij.github.io/vue-select-group/index.html)

## Install
Download file /src/js/vue-select-group.js
and register your header
```js
<script src="js/vue-select-group.js"></script>
```

and prepare custom json data.(just keep the element to g_title, g_datas)
```js
// example /src/js/data.js
datas: [
      {g_title: '2018', g_datas: [
        {data: '20180101'},
        {data: '20180102'}
      ]},
      {g_title: '2019', g_datas: [
        {data: '20190101'},
        {data: '20190102'}
      ]}
    ]
```

You may now use the component in your markup

```html
<select>
  <option is="select-group" v-for="(data, index) in datas" :key="index" :params="data"></option>
</select>
```
## License
FREE!!
