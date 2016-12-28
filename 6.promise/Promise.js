function Promise(fn){
  this._status = '初始态';
    /**
     * 1. 改变状态为成功态
     * 2. 执行成功的回调函数
     */
  let resolve = (data)=>{
        this._status = '成功态';
        this._success(data);
  }
  let reject = (err)=>{
      this._status = '失败态';
      this._fail(err);
  }
  fn(resolve,reject);
}
//注册成功的和失败的回调
Promise.prototype.then = function(success,fail){
   this._success = success;
   this._fail = fail;
}

module.exports = Promise;