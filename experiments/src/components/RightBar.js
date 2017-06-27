import React, { Component } from 'react'
import VerticalMenu from './VerticalMenu'

class RightBar extends Component {
  render () {
    return (
      <div className='col-lg-3'>
        <div className='container-fluid' />
        <h4>Откъде мога да го взема?</h4>
        <p>
                    Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове. Този начин не само е оцелял повече от 5 века, но е навлязъл и в публикуването на електронни издания като е запазен почти без промяна. Популяризиран е през 60те години на 20ти век със издаването на Letraset листи, съдържащи Lorem Ipsum пасажи, популярен е и в наши дни във софтуер за печатни издания като Aldus PageMaker, който включва различни версии на Lorem Ipsum.
                </p>

        <div className='container-fluid'>
          <VerticalMenu />
        </div>
      </div>
    )
  }
}

export default RightBar
