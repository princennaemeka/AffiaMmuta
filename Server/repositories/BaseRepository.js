function BaseRepository (model){
    if (!model) throw new Error ('A model must be provided');
    this.model = model;
}

BaseRepository.prototype.add = function (data, callback){
    this.model.create(data, callback);
}

BaseRepository.prototype.delete = function (options, callback){
    this.model.remove(options, callback);
}

BaseRepository.prototype.update = function (id, options, callback){
    this.model.findByIdAndUpdate(id, options, callback);
}

BaseRepository.prototype.getById = function (id, callback){
    this.model.getById(id, callback);
}

BaseRepository.prototype.get = function (options, callback){
    this.model.get(options, callback);
}

module.exports = function BaseRepository (model){ 
    return new BaseRepository(model);
}