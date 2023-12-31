import { Component } from 'react';

import css from './section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h2 className={css.title}>{title}</h2>
        {children}
      </section>
    );
  }
}

export default Section;
