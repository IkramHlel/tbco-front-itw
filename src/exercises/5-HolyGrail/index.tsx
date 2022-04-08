/**
 * 5. Holy Grail
 *
 * We are in 2021.
 * Using CSS, how would you build the layout seen in the holy-grail.png picture.
 * Feel free to update the html structure and add classNames in this document if needed.
 */

import { Fragment } from "react";
import css from "./style.module.css";
import src from "./holy-grail.png";

const HolyGrail = () => {
  return (
    <Fragment>
      <h1>Holy Grail</h1>
      <img src={src} alt={"Holy Grail"} className={css.picture} />

      <div className={css.wrapper}>
        <header className={css.header}>Header</header>
        <main className={css.main}>
          <div className={css.leftSide}>
            <nav>Menu</nav>
            <p>ITEM 1</p>
            <p>ITEM 2</p>
            <p>ITEM 3</p>
            <p>ITEM 4</p>
            <p>ITEM 5</p>
          </div>
          <div className={css.content}>
            <section className={css.contentTitle}>Content</section>
            <section >Lorem ipsum dolor sit amet. Est reprehenderit laboriosam et enim inventore a ducimus saepe rem deserunt molestiae est magni quam et consectetur perferendis. In dicta consequatur ea minus voluptas cum harum accusamus ea maiores voluptatem eos dicta impedit et necessitatibus illum.Cum optio dicta ut nobis voluptatibus ea consequatur harum vel fugiat harum qui facere minima. Non ipsa veniam et unde doloremque aut quaerat voluptatem eos architecto odit ut voluptas quis est illo impedit. Et earum iste qui accusantium dolor eos recusandae galisum ex sequi sequi.</section>
          </div>
          <div className={css.rightSide}>
            <aside >AD</aside>
            <aside >AD</aside>
          </div>
        </main>
        <footer className={css.footer}>Footer</footer>
      </div>
    </Fragment>
  );
};

export default HolyGrail;
