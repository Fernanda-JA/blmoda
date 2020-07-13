import {useState} from 'react';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import React, { Component, Fragment } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'


const Styles = styled.div`
  .CarouselItem {
    border-radius: 15px;
    text-align:center;
    justify-content:center;
    align-items:center;
    margin:auto;
    width:100%;
    background-color:lightpink;
  }
`;

export const Hombres = () => (
    <Fragment>
      <br></br>
      
      <CardDeck>
      <Card>
        <Card.Img variant="top" src="https://www.dhresource.com/0x0/f2/albu/g7/M00/7E/13/rBVaSVvijcmAbpVAAAJ3a8X8rfU061.jpg" />
            <Card.Body>
            <Card.Title>Categoría: Hombres </Card.Title>
                <Card.Text>
                Modelo:UT37E <br></br>
                Precio: $1250 <br></br>
                Color: Café <br></br>
                Tallas: 25-29 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRljfhBxBl4Vte5QA5Nx0Akfmjg3JJZDycEUg&usqp=CAU" />
            <Card.Body>
            <Card.Title>Categoría: Hombres </Card.Title>
                <Card.Text>
                Modelo:563TFR <br></br>
                Precio: $1800 <br></br>
                Color: Negro <br></br>
                Tallas: 25-29 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIVFhUXFRYYFRcVFRYVFxUVFRUWFhUVFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi4gICUtLS0rLS0tLS0tLi0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLystLS0tLSstLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUGBwj/xAA/EAABAgMEBwYFAgUDBQEAAAABAAIDESEEMUFRBRJhcYGR8BMiobHB0QYUMkLhUvEVI2JykgdjgkNTorLSJP/EABsBAAMBAQEBAQAAAAAAAAAAAAABAgMEBQYH/8QAMhEAAgIBAwIDBgUEAwAAAAAAAAECEQMEITESUQUTQSJhcYGRoTJS0eHwBhTB8UKCsf/aAAwDAQACEQMRAD8A8xG0W1c+0aIC9Y+Ckvs61oizxUXRaw2qwyC9+LI3FBG0UxwwS6R2fOOwROsq9dbPh6swskXRRGCVDs8wbKlRIUl6GJYHDBcy1Qe9JKgs5+qoDVdT5MJb7CkMzRnUSe1W10HBZjAM0ALEVXedgTexlVJiOJoLkAXEjYC5JcorKQEYUDlYKp5QBRW2xsIGtisYCaIpFEAa7ZaC4CajjINGzzSCJyGZCZHNUAWVTVJ0QsKYyESUcriBAkBYRTSy5EEAXNRUogD7A4JBctpaFleyq2MhDgox6Y+GEl7UAP7VLJGIQw6Iy9IYuLCYcFybRoIOOsF29YJRjoA4cXQ5WSLo4jBepDlT4YKVBZ4MwiHSkmOs+xetfYoc5yQOsbSlQ7PF2uBQrimYXqPibVYdRt+K828KWULdEmrERAQqISAJypyqauU0ANhtorY2q0iDIIWw0AVD+obJ+SOKxKYe9wWhMBEM4IDQoyJFXGakMsFLCsFSSAFuRwyheoxADVSpRAH2WO8YJbSCFnEEnFT5R0sVsZFPeEBcCrFmMlncMEgLivkldupEYlhiBhfMyV9oCgLZIgxICnnJUHuULVJlADglWiKGAuOAQmItujtC/NBzSSGyqdqTdKxxTbpHzbSNoL3lxxKxOXqviL4OtFnm4DXZmLxvC8uQoTT4NJRceRRCEphSygkuDCLiGgVK60HRLmGbr1r+GNHkgxSNgXYjQnZKkhNnnokIpTmSBXcfCzCw6Tg6rJooLOIxwEziStMIzWR0Luh0jIzu91GOlcHeaQx9pZiicaIWWjP2Qa9LpIAgRuCTrJ0N00hinqMRRWoWoEGohmrQM+zPfIUCzfOEXhJiWsJDos8FqZG42zYsb6maWXECclUN5NZIAt1FNYEIHmeCzgOQMa5+CEuVapUc4pAVMphiiSTJyXFiBt9+STaW7NcOGeWahBW2OZCLnBrakmQX0HQ9gEGGGY3uO1ef+B7O1z3PNS0CWya9a41XPPKpLY7ZaOWnyOE+UBHgBwIIovn3xZ8FQ3TfC7rtlxX0WJEAC4Ok4yxTaBpPk+IW/RkWESHNMswskCEXODRiV9R0hABBmF5rR1mhCK50hrA90LohKzmnirdHQss4bAwC4IjGccE82jYkOdNbnMA508Fg0nZHPbILeWFG0DFAHnTYy2EWkZS3rmOhSXoNORwCGjCp3m7rauIXKWUjM9iRIjNb5JRYkMzdZK2Ol1VNLED2JAO1gQlBLMwiY6fFABSUXU/hP9fgogD37LO43mqNlKFFGhgGetVYosUrUg1xYmE0vWIqFg1pm9FqnNAGrWmVHw9qxFyuHaCNqQzQ5hzS3N5rTDeCFgi6QbrSkRkTcVnPJGJ3aPw/LqX7KperZNa/vCYwF65z3Vmb1dra2cxQ5hI7Yn6pTzzXFPLKXJ9npdDg0m0Fv35/0e0/06tH8yIP6W+BPuvU6QJFy+U6M0o+zxBEZeLxgRiCvdQ/iyzRmibtR2Id6G5KL2o8nxPTznl8yCuzVG0gWjNcqPaCalS1aThfa9p3ELz+kNKtAJ1gTgAqs8tYMjddLJp7SgY0gfUfBcbQUMPIJv1p8FzLW90RxJXY+HY7GNMx3p+C1xbyL1MHixOvr/PQ9A4tyS3FuSzRNItwCpmkgbwus8Q0doBglxrTDAJIuCzP0k0n6Vz9NWhzmgMhkipcWicspobGkcq1xdYkm8noLKQiMQE5HI0V6qkoEoCEwoSkAEkLgjKEoAzvW3R9iMw5woKjenaJsoe4k3N8Sbl2XQBmhIVmXXVp3y21RMVnr3wRiVkjQskRiOKHsnnFW2EISk6irYEBjJyIqtBaG4JAswB7z0UW0sGM1i80Uevh8E1eXdrp+IRIymhc0DYscXSGSxRLQTeVjLUdj2NP/T2OG+aXV7lsh9qtJDiQeGElhjx9f8ojvS3OXK3Z7lKKpbLsJDZYlQlRzkpzkHNKSjwRz0klW8pZKpI48mSww45q5JWsja5NoiMr5C1Uej4kn70D3JbDJwO1XjdSTOfWwU8bXuOxEegEUKO2BXq7F3WfKUUIgndRfTfhPQjYdnBe3vRZOcCLmy7reRnvK8X8I6H+YtADh/LZJzzga91nE+AK+rrLLLajfDHezzuk/g6yxh3oYnmBIrx2lv8AThzZmC87jVfVmBRzZrmUmuDpcU+T8+aQ0PHgn+ZDMswFz9XJfoa02BjxItBXl9L/AANAi1DdU5ii1WXuYyw9j4+QUBXofiP4aiWY0Ou3xC4lkh6z2jCddwqtk0+DGUXHk6diharAMTU8U0P2oniaWWKyBnaqJOoogR7bVYKg4YrjW3SjidUUAyXaiw6LzWmYUna4pmozRco7Ho+FaqOnz9UvVUA+2E4pToqqDHDsj5p3Zs/T4rz6PslqupWZzFQmKVtbCZ+lFKVwARREsxzu/khc1y3vWWKE6OeeRmRwOSrUKuI7asznjPxVpHHkzUGd/JWD0UuYzCmtJVRh5jNAJORQOh7JKmxlpY8FFFp36mMwzmpD+oTzW17gskZ4ST3FOPstNnTdHGCKC9ziGgEkkAAXkmgAR6IYHyAE6VOAC9DYoDIRDmABwqHYg78F0TzRhyebo/CsuqtxdR7v1+B7j4b0QLNADPvPeiHNxw3C4btq6ty8/wDD/wATsivEF5HaV1SAZOIBJBwDpAngV33rFz6tx5dNPTy6JhscrcUkGSa0qDMiTEKa4rBbo+qxx2IA8zpJoiOdiLl86i2drYr3NEpkjZKeHJfSbSBDs8SI77WuPGS+duaQJzn1itcTSe5GbDOUHKKtLn3CtcoSSiKS5xXScIyZUSu0UQB7s2wfpWHSdm7RmsWyGG1a7XABqLx4q7PE7QahNQO57KhI8PH0SJ90uBQNscZtzzxXrHwQCRKuISosAKHBM6seSUfwto8+O3zCImLsC7GqBgldnNR5UTp/u835mch4iZpD4ETFy7UWEJpT4KPLXYiWoyPmTOK/R5xJ5oP4aF1nwcBND2Lsiqo5275OWdHhWbBtK6LoDslYY7JFIV1wc82Myo4zQdm7NdXs3bFYs2tdfj7qXFGkMmRtKLbZytV2auFYIkSUgTMyGA28l3bLolriNd3/ABBEz7LqwNVo+m8SFKNbgG5SWE8kY/hPd0nhWbNHqztxXb1+fb57lWCxtgsDG8Tmc0i1Wic2g0rM15TGCu02g/SDeRO+YB9VkaRKkrsCRjtouXndn0EIRxxUIqkjq6GtYgxYb7tRwmMwKOy+0kL6qSvjQdeOI707v38F9W+G7R2tlhPnM6uqd7O7XlPitIeqPK8bx3GGX/q//V/k1RVUGJVMitWRxWiPnzXGdRcW2v1mhmb67hVdCJHouXCq+eAJTY0cT49if/nEJt7nNB3AgnwC+c2iJ/NErgJcOqr1XxhbtaIZVlQbyvKlkjPq5TH8SR6ax9Gkcpeu/wAknX13+wZeihQZ3kBLmqJXcfMmv5Vn6wosesFEAez+fnOQI3hIhudOd1eitkRgGKUBVU0JMlotRNXNBniKE71kaXSy3rU5hzolRQLp4ZIopMzlhMruFVTGy/ZEAUDgcClQ0wKDND2gncZqy7go0IK2GQS0m6qDSUJ4IIPdN0ghdS5axGBEjdiPZIXBx3MJxKW6Gttphah/pwOG47ULIjCZFwByMxyUyko8nRg0+TO6xqzLDhF1wPpzXWsVmDWi6bnVOEm4eJQxbO86oY4NAY01AdfM+aERX9mKBzmuIMu7SpmuPLmclSPrdB4XDTSU5W5Vz6Lbeq3DtNmY3+YwAFpmTMmc7/NZLVrwnEw3EgkksdUSNRJH89CPddNhNCHXc/3ToTDqDWrqiRIMwR9p2cclhuej7Mk1F17139/7mOFbobvq1mHIk6vO8eK0vZK4zFJGYMxmqjMBpKdwPressKE5lGnu1MnXDccEyblHaW/vX6fz4Dyca4k90C81v817P/T7TDWF1ne4DWdrQyTQuIALdhIA8V4snLYKGRzuPFUHkbtuFcD7+qadOzLPhjmxuEuH9vefbojVz7VBN4XgNH/GlohgAubEAwiUdK6+YJ8V1Inx44itn3ycf/lX1o8F+FahP2al81/mjsxtc0AKxaUtQs8IknvG7euPavjV8jqwmtO2Zl5LzGkNIRIztZ7ifIenJJ5Oxth8Kn1Lzdl2Ttv6bGaPEL3TP7k4rNaBXetQb1nd7lJtGaeJ1NWdvieFy0k0vj8l+xnIkhVl5OCkpr0D4gpRFqqJAe4c2+Z5pbrPPEJJjk/a4bJBAYrp/T4rSyaGxGyWZxkZT/CkSKSZ0A2n2TIVinUOBG5KyqEOfSp62IS8XghbTYhqlxMw0TMgFgiRWfa3iTWe4IsC4kLE49YpLnCshUXKaznCcxfKUqz3FNbZ3kVOrtMgeQUuSXJvhwZcz6ccW/gJaXm8JjGTqRLbUBPh2eX1OLyMyZf4j1TXS6nh+w6uwnn/ACn0Gk/p+T9rUSpdlz9ePpYkOApcCZE7cJ+CXaoLHCbwHEV3eGXmmxZEFvCU5DzF068s0uAS4SM9YUM51H2mQzouSUm3bPo8eHFih5eOKS/nPcXEiODWvYbmCbTiG0Nc0VktDYgJaZEkHVuIIp7omQ+60G9pcL83TzyIWeNAbe0Frrw7jjmpoG5Kn9v0HRrO2s5G++Z6/CymBqVhu1SMBMgzFe6UbbQ8kBzTrV7wnI+nWKveczXP2TIl0ydr9xTXvcatApeDjsy5Ii2d191DK7Kd6NuzLDGimXXQSGl3dgEbDiagHYK4KpelxrxmjcJ1lXjchJ355y/CAoW4eW+85oHMGQx9k09XigGxUN+WPFAqT5ALBlnkoR64bgi/GE8Zqh7bMUFJIuXXFIjp7fT3SYiFyTlSca7mINJVuVGda4qicJL00z86lHpbXYiilegomSezc28T4hKe1bXw8x4+ySSRdTeaKyTJrZgS4+iOzR9UZzwNw2zVx4ZnOnCaFsCYrLuiZEpGUw2fAkT3qZNJWzXDjllmoQ3bNkK0Cd0wRUZhYXWEax70xOkhKm2YTBFAEhd1j7oXROvxluXLLO3wfWaTwPFj9rN7T7en7/zYawNbd1xS4rj4dG7qSAxOvY4qi/3Cwbs9yCUF0xVL3FFx5YY+d/kCgO/OtMLzXAXBG549NyGfV1BcKYcFI9yBvKlK3To2s6mdVfc1pyrIidageZn6pbp7+AqTiSKyFyDYMwKGlL6XoIZIkeTpET1iMMQ2oIwpKuxU5sjQEXCjhcBft4qA3UOd8pkm6Xsg1aSkaCV+d92OxIW4Q451pnJQYHrqtymrs8fGtP3Qk76zlTqeKB2Wc57buXW1DxF22pvvxU1uusUBd51nW5IGWT11ggMsvO6/BBr7uvNAXdZ7SgjrQYd0Np2oXO3+d9FTGl13pLeZ3KazRcDEIyo0UxdinRnLIlyXPqWVEJeOp4US+0eRMNaBnKnAk1O5CI5OAlxHkiifPQ4vSy9A5wOHIpJrgeaKInm7DG2ls/p457VrhuaRNcmJDkU2G9wuXoRpxR8TqFJZZdXNs6eqFFz+3cqVGJ7Yl2E/DiqcTXvZznIZrBFbHN/ZAbNd879g2VSCyLKZimhrJrQBKgzzWlkUb4j5SqTlI0XLtdrLbQ2pkWSO5xc0+Hkq+WE6vecgXaoG+QFVi0pZZAOaDMX1LiRxOCyzRcos7dBmWHPGTNcO0fn9kwR/DyXKhWlv3TGIIqK5jPbNa2MJq2Tv7TM/43rzz7aGfqNRi+49kQie43rEXSvEjtEkQjdddcEjdZEbNbx81J+I6xWMxuvyrEXz80D60aw67ipOY4G/DPb0Fk7bz8+uKrt/VAdaNX4lLveF+aGY5Tu8pc6bUuC15uaSN1OeCj2AUdEAlhLXPhQYIM3NIac9XAmc7sc0t7qUmMBWterksxx9oed8h6eZSnxD+nmSfVFEvLEMv6lzlgluidegQF8vtG6vCk0LrTL9I5T8UUZPKq3Y4Nca13kgAbZmSouY3+s5CjRxx4LHEtE73A/8vRWIjLqHM6zQdw+1vCqqjB5lezNEaI5wkXADBjbhvw8yq1KSmXHIUaOLvwhbEBwAAwaQB/kalW0i8gy2d0czUoHa5J2ZnKjjkJu59SRPBn3pHITEt0h5IQ/J3AV8SUxsSVacKu8PdIqNMvVnfyuHJKLOsAjEUDCu2RPAYJUSKJdeaCm4rcGK2oVG6QbNZIlp1jSgF1L9qf27s+WC7sSqKR8hr8scueUo8F9k/wDSeRUQdsf1Hn+Vas4z2cU3mfmOFyU5nHbVNM/eUt16C7dccOS0IMr64cr78SsdtnKY5LoFtJHDLDjzWe1w5t9iPHYkM8lFtAa67u5ey1QIrXfS73HBK0hY6mh9N9VzX2ZwNPBc88SfB6Om8QniVPdff6npWWqILnT2Ez8HIvmz90Nh3tA8l52HbYraHvDbXxWqFpcfc0jx/PisHjkj2cXimGX/ACa+J2hamm+COBI9VfbM/wC1/wCTlzBpGFK8ZYg8pFPhR2O+mR5OlwUNNco7YaiMtoyT+huMdo/6Q463OpVttB+1jW/2tHr5LNrAZC69p9p8VYiN/p5HHrckadTGxXvd9Rcd7hLl0FWocJiWZl59blBGbk3n7fshMcZNzuJ8etqAtdy3MOIJ/wCU/wAenFA5oF4HE+nUt6XGtjRTuz5Dx9uSxRbXUSGscxdungNyai2c+XUY8a3aHRXzmLssPAdUWaJqgVIHLwGKEOe/ADY289bFphaOaMK7b+S2jifqeTn8RhfsK/ezELSz9LuXuVBaf9un91eS2/w++RlXHLGStlkObadb1flo4v77L6NL5IymLlC5kegRMtP9BnsP7LeLHmSaYDlei+TbtHWXFHlRGtfmTu/sv0Oc61PP27puLvMK3Rnn7RxPpJdMshgUbXOfoFABf3RyB31rgn5cewPXZ/zfZfoctginLg1ELK8mZmf7qDkt0S1NGZQfNVul5pqCXCMZ58s1UpNr4ixYjfQ7M+S0w4JGMt1yFkdpN8thoPFOc0y485ZZ/lUYDflP9xnP8KLB2bsjyUT+YfI9e5wPXOuN58UDhh5CdNnNSI6t2/rBA+c75dSwWpkAXASrjuFcUuI3Lrq9OJByux2+e5EA2V16BnEtcE1p55V9VzosC8mW4flehtAbnOhvrsvWCJCyBOF3XJS0UjkGzjh1NC6xtJu8uiuqIWBoP6jI1pkqbAmAbxP9JM85TCkZxnWAbFX8Pbl4ruCzGdA431Mm0woSiYBgwC+ZLiSKjCUsPFLYexwPkhOhdz/KfDsj7g542TOK7ZBMrqCQIDQQN8lDCJvJMhmTLq9JpFRySXDf1OHD0c8kTLh/c4jxK0DRcx3nOOyZcDlWclr7QAzAG89TV/Muq0SIwAF+ciEdI+uXcRA0OzfulQBGLK0fbuM9s1UQnM12y2qogmRfOfVM7k6Jo0t1QC2TRjMCRuzULuPWawuiOwLuJ9MELg4444y6wRQUa4tpAMhM3dXpXzp/Tx/GdEgAYCvHh6pjWgG7ca/ugdBdu7bnLcgnMXkzz98kUxfS/HDkhcJT25IALsDI13VS2tlQ57ZpjYp4Z8Ko2xuI2GSYCSy44G6W5L1Rsw8arREeLxdt6kgIxA8J/sgTYGuMb8PYoYT5GhkDeL+vyiMsB68uaXTHeEEGz5rqZ9lFk7N2fkogD2UT3Wd13D1KtRaGZPtO4IWXc/RRRBQk49ZLFpG7i1UopYxIv4LotvKiihFC3X/5eSt2G4KKJgWzDclv9VFEAcyBeeK2WC49ZqKJlFNudvd5FKZeNzfMKKIAZpO88PMrDaMN4UUQNAnDrNE7rkrUSAJt44/+yAXcD5lRRAw2/TxCzt+rmoogQ39W8eTkYw3FRRBLFOv4nyVt+rj6hRRMkyKKKIA//9k=" />
            <Card.Body>
            <Card.Title>Categoría: Hombres </Card.Title>
                <Card.Text>
                Modelo:HU37E <br></br>
                Precio: $1600 <br></br>
                Color: Rojo <br></br>
                Tallas: 24-28 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFngs9L4la73h4SK97R-0P24wcEgTLCUAX5Q&usqp=CAU" />
            <Card.Body>
            <Card.Title>Categoría: Hombres </Card.Title>
                <Card.Text>
                Modelo:PO37E <br></br>
                Precio: $1200 <br></br>
                Color: Verde/Negro <br></br>
                Tallas: 25-29 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
            <Card.Body>
            <Card.Title>Categoría: Hombres </Card.Title>
                <Card.Text>
                Modelo:GR37E <br></br>
                Precio: $1290 <br></br>
                Color: Blanco <br></br>
                Tallas: 25-29 cm
                </Card.Text>
            </Card.Body>
      </Card>
      
    </CardDeck>
    <CardDeck>
    <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3Um1aBvn7stzwyhg8Cf_8dOPqc_r4rx0yoQ&usqp=CAU" />
            <Card.Body>
            <Card.Title>Categoría: Hombres </Card.Title>
                <Card.Text>
                Modelo:7Y37E <br></br>
                Precio: $1330 <br></br>
                Color: Azul <br></br>
                Tallas: 25-30 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqxIVvD8xGsKBx1kPqVUu6a8NsfupxAWPuxw&usqp=CAU" />
            <Card.Body>
            <Card.Title>Categoría: Hombres </Card.Title>
                <Card.Text>
                Modelo:6T637E <br></br>
                Precio: $1400 <br></br>
                Color: Negro <br></br>
                Tallas: 25-29 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeePfEqKON1kJwsCWh9A_kq3d7Bo4JPa__eg&usqp=CAU" />
            <Card.Body>
            <Card.Title>Categoría: Hombres </Card.Title>
                <Card.Text>
                Modelo:5637O <br></br>
                Precio: $1800 <br></br>
                Color: Azul/Negro <br></br>
                Tallas: 26-30 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLob9lMlb_U1eKmqNcZO0kUVNNYbERZ5knwg&usqp=CAU" />
            <Card.Body>
            <Card.Title>Categoría: Hombres </Card.Title>
                <Card.Text>
                Modelo:51137E <br></br>
                Precio: $1300 <br></br>
                Color: Blanco <br></br>
                Tallas: 25-30 cm
                </Card.Text>
            </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHFa8m_VxXORBPy8QItmgvwOEwczB-40T7zA&usqp=CAU" />
            <Card.Body>
            <Card.Title>Categoría: Hombres </Card.Title>
                <Card.Text>
                Modelo:33637E <br></br>
                Precio: $1700 <br></br>
                Color: Negro <br></br>
                Tallas: 25-29 cm
                </Card.Text>
            </Card.Body>
      </Card>
      
    </CardDeck>
    </Fragment>
  );
  
  export default Hombres;