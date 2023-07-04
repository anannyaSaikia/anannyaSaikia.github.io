import React from 'react'
import style from '../Styles/Skills.module.css';

const Skills = () => {

  return (
    <div className={style.skills}>
      <h1>Skills</h1>
      {/* <div className={style.bg_image}></div> */}
      <div className={style.desc}>
        <div className='skills-card'>
          <h2>Technologies</h2>
          <div id={style.techstack}>
            <div>
              <img className="skills-card-img" src="data:image/png;base64,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" alt="html" />
              <p className="skills-card-name">HTML5</p>
            </div>
            <div>
              <img className="skills-card-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAArlBMVEUVcrb///8AbrXT4u6wyeEScrcQdbgWc7WAqtFnm8kAcLYAbbSUttf//v8Wcrf9//8AdMD0+fzu9foAarPq8vjS4/AAcbrc6vQAcLzk7/eew+AUebs8i8e90ubC2eq61ekogcRVmM2oy+SDtNgAZbNCj8fL3u2dvNoxfrtAhb92pM4mf8QWe8RAjcpLi8JtpNJVl85JlMlfoM96o82PvNyGrtRglccVe7o5i8NzqtKm51zNAAAR2ElEQVR4nN2dC3uiutbHCRqjQaCoxYqXejleWu3Y8bXt9Pt/sTeBtnsfyVoLAWU869lnnmf22Wp+JCR/1g2L/a+b9V9/89mgdus2UBQwocsW/5H2LZv8z0JRYHMYPXiedbvmeQ8ROoc+q3erHmRB6z4Sq3TliKrHWMy6K3SVMtZ3bnmRqmXq9E+ITgkHQ171IAsZHw4Iws6G3/Qy9TYdinAZ3jKh4EuC0O/MbpswnHV8nDDY3zjhPqAIP2+csEkQusHRrnqURUw4x8BFCZkf3bao6UYnU5iaQ3/sVD3IIuY5Yx+fQyXb5C0f+VyeirbUKmW1mxY1fFg7BUoR9m9Z1Ai+OZWlBsKRd8uEI5pw8HrDc2jx11PhnT4teocbJhThoUecFszt3bJsU6Kt51KEwZt9u4SW/XYqadL3YdC+5SPfaQfUfej60U0TRqeSJj2HrC6rHmZ+47Ke4kkTjhu3K2p4Y5yBcDK9XUJrOslAuBrdLKGSNCuS0Gf3y5sltPjLPaNOfJ/1b1e2Cf7az0A4aMmbJZSt09ia6T7s7W/3uJD7HnkfKlHTvF3ZZjdTksZA6LdvmLB9ukZNhGx9u6uUr9M4BsJ5o+qB5jWvMc9EWMdFjbAqWsSeR/02n6ZlqYnwcUow8OryENBxCT49DXGbCH02ecG/R/6qV2Tjd1yM8JfJqbfUQOiy1Qv+PeEsPe9XMiJsxF9S/mAjYf8VXwzyl59eC9exA0H4ep+BUMm2dxTQkk+d9Pdcx36F+Mje06LNRNjBhamw0n7lq5jLgididbU6GQgV4zMhvaerSlapy3ob/NrLZ8O4DISsSWzKW8OefBXrb9CBWbxp+JCJsI0/AovtvBJCn62mBGHb8DET4Xoo0MWwjS4NYzSfPW7R28c8MMOzBYu2WOaXsHbHSvZSn81RQuEZF5eJ8HGKa2/+dg0gg0U7dFyWSbQZCSeEMOXP18Ax2HGH3T5C+xKzELrs/gm9UkK2KpI0TcJH9mSQNEbCPk6opENQzXHxjB5jQj6lPW3mVdr5RQlTgzi6gvktaly9TITqm97RvCj1+NSvYDNVV/4dlzT83XTdTYSM8Jhq33kVhINf6BQqWWr6nJHwGZXwomHclS9tagccoYAi/DR9zki4wB9SNGEVczh5wRJhhAgXps8ZCYlzh28NLq2Lm6sdSOgcKq1lMNPTE5vv8HOnUYUw9VkdVyJiZ3wiMBI+4oSeUcNf3qItMYfG7cFIOCF8wvKtkgN/TQyrYXwyN96H9w18OdjP6QDIFayNijZhNYzeFQOhy3pDXAAa/SGlGfTNfpM4poc90xZvJPRxf4i+XJcz6xVYIJ1nPAVdbvyMhMqeJF79JPjlLHwHZnZAydI/xg+aCYmyEqHP10sZ3xuHpD3VaGBTAL54M2GV+Yk7k8OMThJRkmZvvIWNzxbs864yQq1MTAON4ynoB+8WmQlddqyS8LTM9dsmI3RzEHdmB5mZcP6A+hMvaYD2Ujae4h98mGcmVLKtW+EcmtxJ2up4SqFIVQDDhErUVFYaJKxhOnErsYjwQ3XvjR8zr9JBt6pqYKHLXI0Pn/4aP/C9rvmD5jkMnMqy9+QmMBMGb3iZObfNU28mZIQwvaDxJ/OIfEK0CW9o/iBAOKqO8Ld5RGywJzxtZtFmJnTZ74pEjVImB2AO+zMigeK3eXUDhIeqjnxxZ3SYKevjmb360pxDWJlsg5QJYzVK0nyeRXisStSIhwggXE3xR/wH4NIYCX02r6qsRDxAvtgJXvopuoDaAwgfKxM1XSjRY0wkhQKiDVql1cm2rjnq4/p1dFkJLdqyr1J1+FRUlS+4Y5Y0frDGLzqXqdpKlLBXUb2z4A3zgPxggW8NfHja8gMnDPKLGp3lmt9LE4KiDc9LFHwEuOggwmV+2Sa4zG8PS4gQz0sU4e+zCP2AyHPEfkv+aua3/wOCPn4P9/8pSXMmYQFvm/12CZ//AL9vRPh52tSEIFwUIHxOF66UQLghZOniPEL/mL+rWdgaXCCo0Sd2927kn0c4z3/k81n/AoQ1G3esdOtnEbqsQBMXvkx13yhsekB4oMEZA3oWOC1YLX8TFz4yO72KmO8T7Q45hy4rREgte+zHpulS1cKEbkT4oYZQ8jlImL+JCx+my42Lmuvim7upqQlBOChQ7yzTJeNFTR3QqNdB8CUgvCFCfzDDs4Ywc+qpxgbFCQ/4eMIZdERBhL38ss1y1sDhW8AooWxo24ITup3P3PXOwoHkRRFCUrR1gHUDzWHwlvtA1L9WOmGH8NLAVxUkXBcgBFdMfqOcDs4akDTgKiXcIjjhDNrX8hrtOLLr0EWFTgvStYURjsompJ1/HDyhQMLJMC+h5ZVe3EY6cBGVARKuprn7tnmggsprsRMe+UWBKEWQ8D6/qOGy7IcLMpCCqH2QsFagiUsXepLJT4gHw0TjFbyoICEVrkMJ59DWnZsQD2gK9dR9NiERcsVMOEe37AORkDRyD27fIGGPyHXEfi9clDyHVGKBsJ8BjzdCSKU+oITmHLoiRrgcHNiDCRK67fxzaG1a+ex9bNyhXOYTCT52G3xgAwnZmsiixRC9nD79bt0cWmO9Lno6exKuj4AJ6wWauORMsbUMDeW0+aQsHRqampCERIXKJcwDlImrZSlePQo7TjDCa4cQBaRMfJ0Oin2SG3rtUYR0i5MLGH8xKxOfSuk1NjUhCe8LhBDzWdxQzky4IAiXQBAfJaSauJRvQh4gZUIFgGdwVStEqJu4XJ3Q3kPuDyIAbBt67dGEnda18zGEY2golxj+5hS0EAveS32qxYna3Y2HmsjbDUzY6S7A2lwWbIhymSasEmFC9kbtNNy2lQ6xT4UJ0ZELG6ihoRxLGtMQLbCQgkiEsI2LGsFb67bRnvO6eBqQMukT39gwXxqKMNriiDtIC07wmmvIhDV8NH6fT7nF0H4yIKHSEVM86go2ccmrFXRDOfNQiLJdMTUXk1CERO89YexZlGiFfO4B3VDOtGNQpdfC3LaFJqQWW2hu4uKz/ixXf1ABK5MjTqibPJxP6FL+RC80tqFQNmjlI5SvkDJZhOhy4sa2LRShbkOBLzawiUuQz8UjjA3lYnsmbmys2QpCSLUSAb+X0grQF9otyJ2E18eqS4NUXiOnBdnEBVwbbZ7LAWLqAhxbgEtkvOkRQsj2ITpQ+P6mWgMAAwU6bPmsh7cEEmjjKoywSfSiBffoaJunlkEA2ku3dcJHApxbNOFihx+IU7NnTGuF8/mUYB+alYnLVuj7iwSsPSjCiDhnAa3k53TxeFNzxQStPUD9iBOSTVw8QO/66prneX6CGvu4rI7qRwGXDlOERJtCqIlL3O4oD6GpC3ByqbfoKrXQZpwY4YroBwM8d9ItqwAbQafPmugmOMRSBbH7kHgqg3wHpFYADG6SRrQbxZviwoRky1fLbgEJ3b5uh3Yeo/rv7XcoPxzXSIJvsMbGGKFPte19hy56El3NzBh7dhQhcDMpnYsL5CcsloetUrZERQ3ytPO249KysjWo/3JeyR3Y8qOHe/28ECodpgkJL2UD9KV3HhfvT1su4074+KEqBG9IPn16X0zMqlRJGuIRACodzkD4eYcOj4+gBg/KglXUfB81bG7By1VNnydt/vL+Nr8HbyQqviDg0mGKkIoWCA7HtGJwfzCJmq8fdshNbzVQf+ehPX1t1iexLx8K/esYEarkobYtWQgjot4ZiUvq5D/9Z6c2We9Hdhjf0f98m1B3T2iP9utJP16bSFKxdqfgaQp3UL8XmpBq4kL13ksgg15/vFjKbsgTRvWdPOzy5WLcT8IULpFeNCZeuPGAdt9GCSdEExfAR50CVZSd/vzw0b1TlF541/04zPudAG5c9t9WH2KrVFhdZDsgdpp7NLaM5nicMMY3mX+/WA55Y7lYxX/LnO4eES6DLpooiBCSGRCW0wTzdNKW7CSDR3RbMQ3DX+M9vriDvqsBJfQl0XsPzrUym/+vPzNb8EY0ppEsJ6GyD3QOhYTz5SBzzy/F6BCv2PI+0I/jhH/wbdr0IrfybYC/Jg1s2/JlGCGZ8+i9lF+llrb+jKgenaEfxwmJvFXTCxXLNp/VXolOdHs0XxcnpJI8kESd8oyIn2jRlp/wSLybB8hDK9fIti1Qv5fEMEIl28g6jrJxDEa0bbG6SHiUUXvpBCcUhhcMl291Ig20i98q+CqtEYmrjn7f4CXPC6V9qJdMe0C/l2/D57BHpNTYrfi4cEtPXI8tWR8DIhrpcbzBAU5I1MSpJ8Sn1nGl5bdLPQKdaV9fdx/tfxE+Tf6By3+cMCA2aiVN5W779PkYK/DSZjLBCyaLX8PEpYUZ2LYlGyGRT5a40/jdg/NncR/45bxxTt/aQf/4W6rHSSvJI8PGALZtyUKYoYmLSFK6rfChO/qs93vB9yDzobH4YXm8+ONov0fy5cQAwgP+KIYTutk70ynI0Pk4tCf95Jnx3Nvyy63TX60PGzsMv/L/6F8X4Sd+d6CEVJ3/v/nimeRht7FsRpPBeQ/x7tfT8aTefB1qf44QmegSwiO+yeFz6EdntTiJIbnkI+0ATXxoGfgSz+N9/a2l3ategpfdwLYt2QiJfhsGSDVAj0s5HbWOyQ6L/n7yfwaTY+tlKmUjYyDgvwnNsfZshC4l22BM7snd9Gk/x7wyyb/uzfdP253klpcv89YhXuuDnxZ5m7h8HSMyvLP/LFaBa4DUf3fVkTdy7kL5HZ7JYXDblmyEBZq4fG0VX95RfYyoHSHegeIT/ceDqn0FBd6izD8IXxFBSHTYIhHjzG+1ww5n6hj5ScT3tRd81vjaNQu9JFpwqjSeIiyjrCQ+RpzG8jmOUgR9HcngToxnnRFHBQiXRGcxnJDqA5d5HPofbtvT2dv6bTa1JeeZDzzim8MZ0aKCIOyU9x4IkQh1dZIkq7ekbw33RJsRgjAg3hN93mj0/8iw8JkWvhGtYijCdv7OdNcxp12IULsQ/nbCiFCGFGE9V8r2Fc2mHJoEIRvnr3e+inlw25aMhKuK2u1mNY7mtGUhrG1yN3G5ivENFRwiCat7S0IWE96I6hRDEfZf/2pCi79SrUSpvXRQoInLFUyXDhck7OVv4nIVk3uqpS9F2Gn+3Uc+nQ5C3YdKtlUNgZpjLh3OTuhS7yCq2uw15c6j5pDVr12Vf5ZxTsZoacK/WtTwIRlnJwnHeL1KtYaluGYmJJI7KzY0TTkToV9FE5eMpj0Fum1LUcLassv537hQFaAnnRmZd0au0mDVPuh4UOLX/DtItZ+Oh6Gz2Uc1MsOVJIyzmOv7jRMqSiu38708uNjHfPcg/8miLkyonfFBZ7VYdh/ueKa47AUBPR1U78pZ1A+CbIm4GQjZd4C2N99vGjvtzK1iJuNfleGu8efzMfi68lksGyH7Tm7Rkb6nLbetPJG+/HDxFeW6tGYfnZvBk5mQ/QSj+/O391FD8msxijjmag9fWu16Eo48K3fnHML4278i7lHzdehIXiQulo1Oa89QBzzqq3wpEOcSsu/136mN14dNSREkgC2pHJKjffRdWpMjjSUHIfu5KQe18edIZ76UfYiIeNfUgUfr98+hkLMnaj7C+Af1DquOkdrxN3+4k17+QHUaUMR1Ud3GIYpLa76Cx/ksP2GCmeT5PH4+yZ2UorBvNfm8PhT4n6+CxKKJZAUJ2U9W4io+RmSj0Bard00eJ3FEcXS+jFzA4oRMz+TPMfLSsCXPtV6TWlm5VYfCYy/51jLGVg4h+zkrO/oYmUp9jJwZ5lWzZ8vR7JxkqmxWFqG25KRKMhHskGP1sf+auURKh45cPtfpesvzrUxC9j22OJtkmaRbWAjnT76fE2ejJAH5sjOqSybUliS3B71adGh077gQoIaN9dhd92Of1Fu6F8mKvwBhbPFM+MHj5ybUWV2nyRfJVmSHodRZYX5p24rBLkWoLVmy/eiw2e7kD1b8h6fk2G5LZPaVY5ckZD/ph4/qaWQrpeUleoxzvh21jsmJfplKhn/swoTsp6B7NW/OptJWcI78ybDNnkac3y5PyH7yZONj5EMfCknM7/LFmdquQsi+H7n8Xm2VZLpfYfK+7FqE2vxEFFy4VOrUrklYjf0/zzOFD2urK30AAAAASUVORK5CYII=" alt="css" />
              <p className="skills-card-name">CSS3</p>
            </div>
            <div>
              <img className="skills-card-img" src="data:image/png;base64,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" alt="JS" />
              <p className="skills-card-name">JavaScript</p>
            </div>
            <div>
              <img className="skills-card-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAUVBMVEX///9h2vtZ2ftQ1/to2/u+7v31/P/u+v627P3C7/3L8f3g9/7z/P993/yg5/z5/f/W9P6t6v2I4vze9v5y3fuR5Pzo+f7S8/6b5vx83/yp6f22NKMxAAAOIUlEQVR4nOVd2ZqrIAweQetWlzrVLu//oMdukkCQTZ0z438x37RVJBCSEJL49RWMMuvj6I2qzofwFgGGvK4+jcd9Vi7auBfSO+OMRRPY+LEvFmq86NXG7+lCjfvh2HPQIdCxvg1uu+0RtVPjvD8u0HNPZBS9735FWRPQcpNFM21ni1Hg2Kubrk/vjtUHz5YPtZbcV9O3kNH0RhrN9upFs0/PGgO9j5ajH1jNqalXL5pPzg2fjPQ+W96c5KNNt56z4Sa4CyPnfBr2XTK+iC07FkW8sp+OtOK2zbJ4ReoIXDHBjI+s+PhD6xNb1iZl/9jmp3X8/XVVCiW0cCoYr5KXoZW2WUcpUXa2McSGM3En413WvphkSCpENA/X+faAneIdJudCWSUWKjRTGXq0Ni7omqFDFy1K03znAEk8V3/PY6X3JhVKKHceU02Dltl2lggk+Ju8or3JNDM2x4Stshb4jb7+G5K8AC1WSETv+EV30bdCM79rW7wr197okRxxEdeyJJASW8TikfXMZRdZg7GK5uymki+MtQM5ohZXb6ShIF/NXylrGxZRMnuIZFVnWJ+AFbScsCjEGDNCtCAcOolduWqBFfIlncmaykUH5nhsOYAZMV9cSCJJsUZOmGDGLKxScLkXBY4opy5aaYdGmmbeo5976dfOZrcltCPfwg0EHmfnjMilWazAb5LM4nbC9+g26KHopk7eLO9IsdBm8WceG/kH2z3Hbbql86DAFUJs2I8v5l0WvZjjiIW0xO9zEHy2wUJOBUc5qIZE4uyHlhq8OPqJb7Gy1vcMXMTDXG4rscweJU6J5505ySAx7HO2yjIQDHV2uu+A94IswR/Pbi6Ns8fS8sVkfzD7ZfdCh2lEH1wFUD/1Yn0bZOo3c3ba1TqXDnfu9mnqxfrCWvCTycRUQWz6nwS7c2buubZ8IDjRw+ki29Avgj2OqVqxKNxvdsTUZy8Dr1VJ9nJXCUHvpDG8IB7lpQlLZe/vZRmn21HciEf5HfENEsV+x83CsuZrH0EFP6qJEcGxZyuhA2+PYIoxwb4k/yKKFS8881Ivv4fiTibY04bYkGLwKI/DvatKsN8B0mE7ydWEaKeTxuZyP2ROt6MY6GNnvYIsLnRm5mx1DT9igbj6ipHxwdExhLMZInzm6ztBxCQ57sUPaFYT7BZxPfEXfon1jyW8905QET9XLlrVjh3Pnd2L/hD7Y7c9HtRLb+kMJbejjso23B9f/bwPJ0jdx2MNvdVuDgbhiVk/NsLP+wCOQGHMCvRX6w9mCQR4Ypzh5X1IkZQSGrRB0sxBwYd4YlwhvA8OmhBJLajHB0/pJZTT+uEvqYdFC6WWZG1Aq8R+nRxDLD9nuA8vdOgp6w6KNGsXnxejeWPiUNslVM5PI2IAS9sr2dAAgWLSTj0h6UR1EC5yZrcvqDdUx19f94mCynzxl2R6UEv/6L6Up9QJpo8fWg6F20kminajVz506dpZcqILS6VkzGFwkpPlnNT64OS4lNOALasPhLB2ClKZ41jkDDI3WmwqqqG9Y15EPSSlLNv2UhR5niRJlmXj3zwvikvbliUcGPOZ5d3H7gvA1VZ0NSkODXgkL5HAgW48SQ0SWwiubWKscxNPpW1xunYxl2PAbcHGO+PuespbjaAQ62p9q/oBILokKZO2Sf2g9DlxXsQCsp+TP1JeJzLh5caCCw7xFKxybLPr+UVqIKUU5Zyfr1k76fJsY8EFNvJPIXO8nDpGZ0gsSzhn3enymG5h9dnZQOEA6jPpo9WJlclOxOf13QEvgAP6zYiFZIt/N8sNsU5KWhkbLeNj3of1E6nisKb6fPXM3CE7k1nBJhL5EyyKz7eq67r+hfG/6naOo8/PHi3zc7aihhpOsY9NwfKiLYejIfvnOJRtkfs0z+PTKkQfH7NrM+qPdLsz+MbpGA0dxt10eYEE0dnS7F1U5pzgp6XQn4ryAAxRVy8F2EWNJuShLE792YZuxqsFt8rp3fDEF63Z5WMNIq+G2/ku9BFNztL0Y9EZRvy+DHdfDNM7Co86xwY2mCjno2HA1xJ7lHk9kj3flSo8+Dg3CatY9VnoO22D+eEq5VghmWYq2dEBmVluEOEg0JXnHrMA+Vr1pB2M1g8LCLnW0juuW/G/EuwPsuyoxFUjQO6M6iBOoIWr7Z4fzbkmo3+ktm6B/0rev4CjJOZ3nA0Sc5UN8E08+KutdUVDWOQ+1N90oYBJ3YuJlNka9MnzUAieREpjJpj6Nf1ao4jFbmEqTU8tF2jdtIRb4Akotnw3cyet8BJMPfm+dUTz3kGGJHQFgxqKZXEFngZwp/+ZEBDIWHjdyO/Lmq7YYJtPdCBKVKgmjfBoIt69g+nx372CUwrkIgbJVpIXkzQK+c3K9izUWxmvlRUJ2BpIRrAEnXNlIICfGw5opjK1eDRRHIfZGEBXtehBRAp70TzgXmg+BNVuoo0YkN1O3ZWp6oWbPNqNGg0ca4YJSOtpfUNuDEu9yqjVUUqSWkWhqBh2nh35QZYAM2V5qMcDiTMrtoZxK1y0s3Y/1RQ1yDIUmhmbeY6ctsFmizGoLJbbiK3hdHv78McNl34vD9nlY06QC0lBIk+bfni+JYJnylk8ILTm55DRYldcYL/CuPHSMRHcKb/vFQ+cXzJysQ1d0KxEMLsZLCagKippCHTWVktYciym2SFVTJmKVojUvVIFGZrkARNsob6rCPWg0ShRAVUPvO6m9dhdkvtgCMxnEVLCM3VA1eCBP1vobsBlDwqvChtiHLU1vVhMPg20d0UjYHNUf5S0jiqxER9YJosiEtO5HeSXoUwdWUQuwavEMKAKUCqsuo07IYItXTU1HPVuXpIaytSRUUBAG/SQoyyjfnGWgrStQYvYOoYf3FWBKSajaOe9NfQogYhdngKpYevAw3kK+C7oYJ7T2BLEbdBFTfkB+vkp1pjhYK8NlqV98AcqzoBug/Pvcu5OniFQLHKhpTS6jeAMJZP1OTYO/g1IMlqrgOXcUlyobSllfBjpfYC4j8iBc8t+gUYGWDhwvbgV+arVHlE8YnWeRM3doE6yY62EhJQvYiRd/cupurek1qNJbL1ACS91/bs6zyjigA/YeVOrsB0VZy4b7BpQC+oo3+rs828I6kCFL+dNrVwYgIwpI3ifAmmbysmd7r4kUATos24E53iEGUgMS6YS2DG1xnLh5msMEDuez4oTUfEeQX9StRpKrDR2TK1ZU5hBfMonCjb5DFdYWSAcU0nlH1ouY41mxCdNPomZSvEln+wWAJStRmqOwm4Z6/ZEcJK9nP5K5kxgNRHIs/SQJdYUkywLV7Kfg1QOJAUuOp/mzNo8kOIAc+EN2SG4vzne3zren6zeoT7ej831mdHV7er7/2ZX72/vtL/98Q59IPvzc/1hXyYkDNk3u/NX7/BMYoFzJzCLv+HcaYdnixucHx/+s/Pj/cUIKKrgT8WBaGTxL4r1mXcM2Mb67DCe62/E7MmxmbMxe3Rcpsao+xtxmV/7i7390sVXK5zxd+Kr/1YMvW0ZznxneRJfO8yF+dpfvtMDe8tpe+A/z1vU5iOvkqsp8KdyUx/wyT++0OaDJaARo7qP1s4/fqDdWY75Az9fR+CS9VZ1BBYskLqzWhFP/EA9kLN9PZDz4vVAnthZzZc30fuq6/PCzmo3vWAb17E2tiqzt8MabD9bZ6//gTp7oiTp9rUUH+t2+1qKhDNg03qZwC2wDcH7q4lqrnv7/cfq3u6vtvH+6lcLntpJjfL91aHf37sGQt4nQcYi//fvk9jfO0P2914YIap38u6f/b3faX/v8Nrfe9r29y6+/b1vcX/v1Nzfe1PFrOzl3bhCE+7l/ccBG7Xf+Y7roPeYZ/RhhrVxKbDhe8z39676Y9ijiBw1L/3SeFj3ngik+EuNZvZyzv0iipVMLz/t8psobjDJsWcr21Ec/KhBmmM/Z2TwwDsgcC+uZJs6Gx9PpNvpY6WaiBvksgORZ+B5YNUWJ0w99fE+FJQJ4m5xoTAF95sdEeJ9WM7m8vLEeCLA+1DTBFunwgL4eWL8ILwPrrku2N7CH1z73ft5YryQefLTAVtbTKqOE7tZ6WJthQVT20AtC2SFEodJjIIe6ynGnER/WPElN4CUIweXgJQO/EwlHLCJ7ZKr800nW60EcZJpz1A4mYhFL3PtiBezJvGaAijV49x/d3TOTrU0ltbsxzBs5B9sJ2zKiNnkbBHkDtpZ1jJHw2PnyouzhVW9geBCKbE2j2s6KaMf866UPMc7m40BGHQvq9wVYFrMFxdSKBtXTlMlDnALp9liGaO6JyZD8yBNMGVDy7Y270yqGVRQW9/+eAAWWJi/MpOC9hi5Gx6kdEFmsrPB6LgnJ3oBZHrPjfFFeQuPJlSmqeQL4zm7AmQJbhET8QDMHdR27fum7P31cTlyOYuI37SzBzPmPAor+sEiREuhl83up1slVpffLIK/FqDFDigqjZBeeayWX6gM2T8yZ48tUymIOSR4C2X8BupYh8XRpacy+s2dI9wFjPd41QxY9i9K0zyQu4rxKnkRnbZZR6VDsbONx3JQvPfPhKYue4dZlwlOJQyozOCBq6xQ+Ct9j65gYMt9sjZ7Ez21jr/fJrZ6grbWlgJe2W/oUqIwhwZsK830wcGS4pnCQCSUsjzahj2ONsMwW0Ru6pZiRptxssquIMvUrYzUOBuM1z5HJA1RrkZuOfoBgsee3WY7NtLry3iHuyGR/7b6YZMGpGx9kxtlQbWbMl2pDxfZvwKOlLXxUKJ9uK5sezLTeWx7owxcDdI7Qx175lIulbxQ9GrjS1ZH8EWZ9dP+sarzZbNThryekiLiPlvAyfMP4tKzfzPV1pIAAAAASUVORK5CYII=" alt="JS" />
              <p className="skills-card-name">React</p>
            </div>
            <div>
              <img className="skills-card-img" src="data:image/png;base64,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" alt="JS" />
              <p className="skills-card-name">Java</p>
            </div>
          </div>
        </div>
        <div className="skills-card" id={style.tools}>
          <h2>Tools</h2>
          <div className={style.toolsList}>
            <div>
              <img className="skills-card-img" src="data:image/png;base64,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" alt="JS" />
              <p className="skills-card-name">Github</p>
            </div>
            <div>
              <img className="skills-card-img" src="data:image/jpeg;base64,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" alt="JS" />
              <p className="skills-card-name">VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills