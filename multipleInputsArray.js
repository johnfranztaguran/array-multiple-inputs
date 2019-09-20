import React from 'react';

class MultipleInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [
        {
          name: '',
          age: ''
        }
      ],
      owner: '',
      description: ''
    }
  }

  handleChange = e => {
    if (['name', 'age'].includes(e.target.className)) {
      let cats = [...this.state.cats]
      cats[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
      this.setState({ cats }, () => console.log(this.state.cats))
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }

  addCat = e => {
    this.setState(prevState => ({
      cats: [...prevState.cats, { name: '', age: '' }]
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    const { owner, description, cats } = this.state;
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
        <label htmlFor="name">Owner</label> 
        <input type="text" name="owner" id="owner" value={owner} />
        <label htmlFor="description">Description</label> 
        <input type="text" name="description" id="description" value={description} />
        <button onClick={this.addCat}>Add new cat</button>
        {
          cats.map((val, idx) => {
            let catId = `cat-${idx}`, ageId = `age-${idx}`
            return (
              <div key={idx}>
                <label htmlFor={catId}>{`Cat #${idx + 1}`}</label>
                <select
                  type="text"
                  name={catId}
                  data-id={idx}
                  id={catId}
                  value={cats[idx].name} 
                  className="name"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <label htmlFor={ageId}>Age</label>
                <select
                  type="text"
                  name={ageId}
                  data-id={idx}
                  id={ageId}
                  value={cats[idx].age} 
                  className="age"
                >
                  <option>a</option>
                  <option>b</option>
                  <option>c</option>
                </select>
              </div>
            )
          })
        }
        <input type="submit" value="Submit" /> 
      </form>
    )
  }

}

export default MultipleInputs;