R7Storage
=========
[![Code Climate](https://codeclimate.com/github/r7com/R7Storage.png)](https://codeclimate.com/github/r7com/R7Storage)

### Usage
* Clone the repo ```git clone git@github.com:r7com/R7Storage.git```


```javascript
	R7Storage.set("user", "Guilherme"); //return true
	R7Storage.set("user"); //return Error
	R7Storage.set(); //return Error

	R7Storage.get("user"); //return "Guilherme"
	R7Storage.get("user2"); //return false
	R7Storage.get(); //return Error

	R7Storage.delete("user"); //return true
	R7Storage.delete("userFail"); //return false
	R7Storage.delete(); //return Error

	R7Storage.has("user"); //return true
	R7Storage.has("userFail"); //return false
	R7Storage.has(); //return Error
```

### Browser Support
* Internet Explorer: **6+**
* Chrome: **All versions**
* Firefox: **All versions**

### Contribute
* **Fork it!**
* Create your feature branch: git checkout -b my-new-feature
* Commit your changes: git commit -A 'Add some feature'
* Push to the branch: git push origin my-new-feature
* **Submit a pull request :D**

### Running tests
* Run ```npm install```
* Run ```gulp test```