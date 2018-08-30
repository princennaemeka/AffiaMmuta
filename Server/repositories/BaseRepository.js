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

BaseRepository.prototype.getRecentBooks = function(count, options, columns, callback){
    var query = this.model.find(options, columns, {limit: count, sort: {'_id': -1}});
    query.exec(callback);
}

module.exports = function(model){
    return new BaseRepository(model);
}