import React from "react"
import PropTypes from "prop-types"
import Mood from './Mood'
class Index extends React.Component {

  render() {
    return (

      <div className='mood-container'>
        <h1 className='welcome-sentence'>Hello.
        <br />
          How are you feeling today?</h1>
        <Mood moodType='happy' moodImage='https://previews.dropbox.com/p/orig/AAlvrgcjwYRrpWD3DCXYfgYOCC15tTDvDvejCZutwucu0vJ3wLaGTZ4kKbbq2EVMP8NZDxaTXzDnpp_wfGvz0ufFGX8cPlylIgrlCF07HdC6IOEnvWIhxv_OV-uax3mpFcf4vQfYTNyACHcJ9VWrk3HkvdyoyyPaUNBW9fPNWZSPE8gxz2iLLEtN3ceZ2sk_DN0MNmlM2G_7bBSRnfZmNmaTcix6bobd0B11BBBPcIoyFCA1mvNzhCdxUgfXW3WG6d7xJr8f5zhvWCuyuNleR1NHN508HwEZhknLgSEX3mPIjYf6t6ZScyEwvxuy3YJLXL4/p.svg?fv_content=true&size_mode=5' />
        <Mood moodType='okay' moodImage='https://previews.dropbox.com/p/orig/AAlWwlUMdkwSzIuOb1O02A8Z6l2KxYtAhjSQZ0EDcWpMPRgvRB7s8Yhxz5zlCn6fe0t6BNgxQbVhxDctlAgGcd7-e0fVhE_Ie5vxy8XDUf8XLX--5ff-gnUgKZvzBlT2hBbkILSYxK32aD8DVoJFs5gV06CXKB3j8X7AQZgIvdoFFCs6lyPLfn7ZFtVvGtqgiqVCcKtcayKSDFx5qe5MczplhOUzPoFFvegxJ9RwMB4EjYRVNG5hk93sZjT_WmNgYKk9YHJ-UlcM2qs5yWSdKPW-rJH739LcjKMJgDKUQ0KcQ8uc3qCw_0KNt2EDVrartQ8/p.svg?fv_content=true&size_mode=5' />
        <Mood moodType='silly' moodImage='https://previews.dropbox.com/p/orig/AAlkPa3xtQmzK0MsdYQ7I7VnX0YiXjYvG8uDmBd0IOEwim6hMLh-nXSQ6sS-e11oE6LwqIHV8gYbwRBle7NAzt_DDEVzAkUz4HN--xtBzWlG1sPI1Oy4Y4eLLzQe_gxEaBMNIROjkO-rSdAa_F6fBlKinIMXY7F3cOThQi049b4caBOXQixVnDasuibSzeljY1WR6fpX45x1FDh_7IeuVWNJLIEP3CFRQ1YwnGfsfzsiiky8S58J09FQMnznwHXP1yNSovYTqOCDc5SN4xX-ofQM03NHDXE9Eq43TniWg3B1hNbOOKz17NwBdQyVKJcGsCI/p.svg?fv_content=true&size_mode=5' />
        <Mood moodType='sad' moodImage='https://previews.dropbox.com/p/orig/AAmZPFfRxaL7XdWivSIJGbARi8yLSDflIRn1NmAxzVgXf1rWqFHnd8cUqWT7L83DssCb4qWr5M7HiOIq9rGc9WCT2zdP1mewTkMsg3AHlBZbXVso07IuNdji7fjykMnyVhOmLp3_HITAYPb4DhdxErZxBiX0mX26qi2grydYDGMXFr63ba468xe0_M3E782LzkPyLioVOGtEzQd6fj_Edv44tfSpXFIjD3nC3tPEkD-_OWyddNRdFo_LTDQKptsmPorKnU6KrbIuw4UHp0JcoA6PCKqyRXt6lT82XCiWffxnMfcSbNVl47MoRVrzLj9xXZ4/p.svg?fv_content=true&size_mode=5' />
      </div>

    );
  }
}

export default Index
