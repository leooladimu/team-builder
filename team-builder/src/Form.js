import React from 'react';

export default function Form(props) {

    const { values, update, submit } = props;

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
      }

      const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }

      return (
        <form className='form-container' onSubmit={onSubmit}>
          <div className='form-group inputs'>
            <label>Teamster
              <input
              // type="color"
                type="text"
                name="teamMate"
                value={values.teamMate}
                placeholder="Type in a teamMate"
                maxLength="30"
                onChange={onChange}
              />
            </label>
    
            <label>Email
              <input
                type="email"
                // type='tel'
                name="email"
                value={values.email}
                maxLength="50"
                placeholder="Type in an email"
                onChange={onChange}
              />
            </label>
            <label>Role
              <select value={values.role} name="role" onChange={onChange}>
                <option value=''>-- Pick a Role --</option>
                <option value='Emperor'>Emperor</option>
                <option value='Serf'>Serf</option>
                <option value='Shitfarmer'>Shitfarmer</option>
              </select>
            </label>
    
            <div className='submit'>
              <button>submit</button>
            </div>
          </div>
        </form>
      )
}
    

