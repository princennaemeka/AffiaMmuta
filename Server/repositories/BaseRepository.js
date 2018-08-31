function BaseRepository(model){
    if (!model) throw new Error('A model must be provided');
    this.model = model;
}

BaseRepository.prototype.getAll = function(options, columns, callback){
    this.model.find(options, columns, callback);
}

BaseRepository.prototype.add = function(data, callback){
    this.model.create(data, callback);
}

BaseRepository.prototype.getById = function(id, callback){
    this.model.findById(id, callback);
}

BaseRepository.prototype.delete = function(options, callback){
    this.model.remove(options, callback);
}

BaseRepository.prototype.update= function(id, options, callback){
    this.model.findByIdAndUpdate(id, options, callback);
}

BaseRepository.prototype.getWithPopulate = function(options, columns, param, param2, callback){
    this.model.find(options, columns).populate(param).populate(param2).exec(callback);
}

module.exports = function(model){
    return new BaseRepository(model);
}