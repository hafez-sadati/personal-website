import React, { Component } from 'react';

class CreateCourse extends Component {
    state = {
        title: '',
        time: '',
        price: '',
        imageUrl: ''
    };

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state);
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="form-group bg-light border rounded m-2 shadow p-5"
            >
                <label className="col-md-4 control-label m-2" for="txtTitle">
                    عنوان عکس
                </label>
                <input
                    id="txtTitle"
                    name="textinput"
                    type="text"
                    placeholder="عنوان عکس"
                    className="form-control input-md m-2"
                    value={this.state.title}
                    onChange={e => this.setState({ title: e.target.value })}
                />
                <label
                    className="col-md-4 control-label m-2"
                    for="txtCourseTime"
                >
                    زمان نمایش عکس
                </label>
                <input
                    id="txtCourseTime"
                    name="textinput"
                    type="text"
                    placeholder="ثانیه:دقیقه:ساعت"
                    className="form-control w-25 m-2"
                    value={this.state.time}
                    onChange={e => this.setState({ time: e.target.value })}
                />
                <label
                    className="col-md-4 control-label m-2"
                    for="txtCoursePrice"
                >
                    الویت 
                </label>
                <input
                    id="txtCoursePrice"
                    name="textinput"
                    type="text"
                    placeholder=" عدد فقط میتواند باشد "
                    className="form-control w-25 m-2"
                    value={this.state.price}
                    onChange={e => this.setState({ price: e.target.value })}
                />

                <input
                    id="txtImageUrl"
                    name="textinput"
                    type="text"
                    placeholder="لینک عکس"
                    className="form-control m-2"
                    value={this.state.imageUrl}
                    onChange={e => this.setState({ imageUrl: e.target.value })}
                />

                <button className="btn btn-success m-5"> ایجاد</button>
            </form>
        );
    }
}

export default CreateCourse;
