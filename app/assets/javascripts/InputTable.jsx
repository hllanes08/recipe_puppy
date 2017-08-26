class InputTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      prefix: '',
      recipes: [],
      loading: false
    };
   this.onSearchChange = this.onSearchChange.bind(this);
   this.onSearchClick = this.onSearchClick.bind(this);
  }

  onSearchChange(event){
    this.setState({ prefix: event.target.value });
  }

  onSearchClick(event){
    var instance = this;
    var btn = $(event.target);
    this.setState({ loading: true});
    var data = {prefix: this.state.prefix};
    $.ajax({
      url: '/recipies/search.json',
      data: data,
      success: function(response){
        instance.setState({recipes: response.recipies, loading: false});
        btn.button('reset');
      }
    }); 
  }

  render(){
    var content = <div className="input-group"><button className="btn btn-success"><i className="fa fa-circle-o-notch fa-spin"></i> Searching</button></div>
    return(
      <div>
        <div className="mt-5">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." onChange={this.onSearchChange}/>
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button" onClick={this.onSearchClick} data-loading-text="..Searching Recipes">Search</button>
            </span>
          </div>
         { (this.state.loading ? content : '')}
         <table className="table table-striped mt-5">
            <tbody>
               {
                 this.state.recipes.map((item, index) =>
                   <tr key={index}><td><a href={item.href}>{item.title}</a>Ingredients: {item.ingredients}</td></tr>
                 )
               } 
            </tbody>
          </table> 
      </div>
    </div>
    );
  }
}
