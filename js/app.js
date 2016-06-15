(function(){
    // Model sample 2-1
    var model = new Backbone.Model();
    console.log("Hello Backbone!");
    console.log(model.toJSON());
    // Model sample 2-2
    var obj = new Backbone.Model();
    obj.set({name: "Mamoru"});
    obj.set({age: 20});
    console.log("obj: " + JSON.stringify(obj));
    console.log("obj.name: " + obj.get("name")); 

    var obj2 = new Backbone.Model({name: "Hashimoto", age: 30});
    console.log("obj2: " + JSON.stringify(obj2));
    console.log("onj2.name: " + obj2.get("name"));
    // Model sample 2-3
    var obj3 = Backbone.Model.extend({
        defaults: {name: "",age: 0,updateTime: new Date()},
        initialize: function() {
            console.log("obj3[" + this.cid + "]: " + JSON.stringify(this));
        }
    });
    var tmp = new obj3();
    tmp.set({name: "Sugako", age: 15, id: 101});
    console.log("obj3[" + tmp.cid + "]: " + JSON.stringify(tmp));
    var tmp2 = new obj3({name: "Hashida", age: 35, id: 102});
    // Collection sample 2-4
    var objs = new Backbone.Collection([obj, obj2]);
    console.log("objs: " + JSON.stringify(objs));
    console.log("objs.get(cid): " + JSON.stringify(objs.get("c2")));
    console.log("objs.at(index): " + JSON.stringify(objs.at(0)));
    // Collection sample 2-5
    objs.add(new Backbone.Model({name: "Marimo", age: 20}));
    objs.add(new Backbone.Model({name: "Design.,Inc.", age: 10}));
    console.log("objs.length: " + objs.length);
    console.log("objs: " + JSON.stringify(objs));
    // Collection sample 2-6
    objs.comparator = function(item) {
        return item.get("age");
    }
    objs.sort();
    console.log("After sort objs: " + JSON.stringify(objs));
    console.log("After sort objs.at(index): " + JSON.stringify(objs.at(0)));
    // Collection sample 2-7
    objs.remove(obj2);
    console.log("objs.length: " + objs.length);
    console.log("objs: " + JSON.stringify(objs));
    // Collection sample 2-8
    var tmps = Backbone.Collection.extend({model: obj3});
    var objs2 = new tmps([tmp, tmp2]);
    console.log("objs2: " + JSON.stringify(objs2));
    console.log("objs2.get(cid): " + JSON.stringify(objs2.get("c5")));
    console.log("objs2.at(index): " + JSON.stringify(objs2.at(1)));
    console.log("objs2.get(id): " + JSON.stringify(objs2.get(102)));
    // Collection sample 2-9
    objs.each(function(item, index){
        console.log("each(" + index + "): " + JSON.stringify(item));
    });
    // Collection sample 2-10
    var tmpObj = objs.find(function(item) {
        return item.get("age") == 20;
    });
    console.log("find result: " + JSON.stringify(tmpObj));
    // Collection sample 2-11
    tmpObj = objs.filter(function(item) {
        return item.get("age") == 20;
    });
    console.log("filter result : " + JSON.stringify(tmpObj));
    // Collection sample 2-12
    tmpObj = objs.where({age: 20});
    console.log("where result: " + JSON.stringify(tmpObj));
    // Collection sample 2-13
    tmpObj = objs.max(function(item) {
        return item.get("age");
    });
    console.log("max result: " + JSON.stringify(tmpObj));
    // Collection sample 2-14
    tmpObj = objs.map(function(item) {
        return item.get("age") + 1;
    });
    console.log("map result: " + JSON.stringify(tmpObj));
    // Collection sample 2-15
    tmpObj = objs.reduce(function(memo, item) {
        return memo + item.get("age");
    },0);
    console.log("reduce result: " + JSON.stringify(tmpObj));
    // Collection sample 2-16
    console.log("pluck result: " + JSON.stringify(objs.pluck("name")));
}());
