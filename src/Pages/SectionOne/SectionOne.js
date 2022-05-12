import React from 'react';

const SectionOne = () => {
    return (
        <div>
            <div className='mt-4'>
                <p className='text-danger'>YOUR RIDE START HERE.</p>
                <h1>Our Facilities & Features</h1>
            </div>
            <div className='d-flex justify-content-around my-5'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M63.0624 38.9524C63.5802 38.9524 64 38.5327 64 38.0149C64 37.4971 63.5802 37.0774 63.0624 37.0774H61.976C61.9391 36.1229 61.8469 35.1823 61.701 34.2593L62.7639 34.0479C63.2717 33.9469 63.6016 33.4534 63.5006 32.9455C63.3996 32.4377 62.9059 32.1079 62.3981 32.2089L61.3354 32.4203C61.1135 31.4953 60.8386 30.5907 60.5127 29.7105L61.5144 29.2957C61.9928 29.0975 62.22 28.5492 62.0218 28.0708C61.8237 27.5924 61.2751 27.3653 60.7969 27.5634L59.7921 27.9795C59.3942 27.1196 58.9472 26.2867 58.4539 25.4851L59.3616 24.8786C59.7921 24.5909 59.908 24.0088 59.6203 23.5782C59.3326 23.1477 58.7503 23.0319 58.3199 23.3196L57.4093 23.9279C56.853 23.1642 56.2528 22.4343 55.6124 21.7422L56.3885 20.9663C56.7546 20.6002 56.7546 20.0066 56.3885 19.6406C56.0223 19.2743 55.4286 19.2743 55.0626 19.6406L54.2865 20.4165C53.5944 19.776 52.8646 19.176 52.1006 18.6197L52.709 17.7092C52.9967 17.2787 52.8809 16.6965 52.4504 16.4089C52.0197 16.1212 51.4376 16.237 51.1499 16.6675L50.5434 17.5751C49.7417 17.0819 48.9088 16.635 48.0486 16.237L48.4648 15.2324C48.6629 14.754 48.4358 14.2056 47.9574 14.0074C47.4792 13.8094 46.9305 14.0364 46.7324 14.5149L46.3175 15.5165C45.4373 15.1906 44.5326 14.9157 43.6075 14.6939L43.8189 13.6312C43.9199 13.1235 43.5901 12.6299 43.0822 12.5289C42.5738 12.4278 42.0808 12.7577 41.9797 13.2655L41.7684 14.3282C40.8451 14.1824 39.9046 14.0904 38.9499 14.0534V12.967C38.9499 12.4492 38.5301 12.0295 38.0123 12.0295C37.4945 12.0295 37.0747 12.4492 37.0747 12.967V14.0531C36.1232 14.089 35.1829 14.1795 34.2555 14.3245L34.0448 13.2654C33.9438 12.7576 33.4499 12.4276 32.9423 12.5287C32.4346 12.6297 32.1047 13.1232 32.2057 13.6311L32.4154 14.6857C31.497 14.9051 30.5925 15.1795 29.7039 15.5089L29.2922 14.5149C29.094 14.0365 28.5455 13.8094 28.0672 14.0074C27.5888 14.2055 27.3616 14.754 27.5598 15.2324L27.9736 16.2311C27.677 16.3684 27.3816 16.5095 27.0891 16.6595C26.6282 16.8956 26.4462 17.4605 26.6823 17.9213C26.9185 18.3821 27.4834 18.5645 27.9443 18.3281C31.0779 16.7225 34.4654 15.9084 38.0124 15.9084C50.2032 15.9084 60.121 25.8253 60.121 38.015C60.121 50.2047 50.2032 60.1216 38.0124 60.1216C25.8216 60.1216 15.9035 50.2046 15.9035 38.0149C15.9035 34.4725 16.7158 31.0892 18.318 27.9588C18.5539 27.4978 18.3714 26.9329 17.9104 26.6971C17.4496 26.4613 16.8846 26.6436 16.6487 27.1046C16.5009 27.3932 16.3618 27.6845 16.2264 27.9769L15.2276 27.5633C14.749 27.3653 14.2007 27.5923 14.0026 28.0707C13.8045 28.549 14.0316 29.0974 14.51 29.2955L15.504 29.7072C15.1746 30.5957 14.9003 31.5 14.6808 32.4184L13.6263 32.2087C13.1178 32.1077 12.6249 32.4375 12.5239 32.9453C12.4228 33.453 12.7526 33.9466 13.2605 34.0476L14.3199 34.2584C14.1749 35.1858 14.0842 36.1259 14.0484 37.0773H12.9621C12.4443 37.0773 12.0246 37.497 12.0246 38.0147C12.0246 38.5326 12.4443 38.9522 12.9621 38.9522H14.0486C14.0855 39.9069 14.1776 40.8474 14.3235 41.7705L13.2607 41.9819C12.7529 42.0829 12.423 42.5765 12.524 43.0842C12.6127 43.5302 13.0044 43.839 13.4426 43.839C13.5032 43.839 13.5648 43.8331 13.6264 43.8207L14.6892 43.6093C14.9111 44.5343 15.186 45.4388 15.5119 46.319L14.5101 46.7338C14.0317 46.932 13.8046 47.4804 14.0027 47.9587C14.1522 48.3197 14.5014 48.5377 14.8693 48.5377C14.9889 48.5377 15.1104 48.5147 15.2277 48.4661L16.2324 48.0499C16.6303 48.9099 17.0774 49.7428 17.5707 50.5444L16.663 51.1509C16.2324 51.4386 16.1167 52.0208 16.4043 52.4513C16.5851 52.7218 16.8821 52.8681 17.1848 52.8681C17.3638 52.8681 17.5448 52.8168 17.7048 52.7099L18.6152 52.1016C19.1715 52.8653 19.7717 53.5952 20.4122 54.2872L19.6361 55.0632C19.2699 55.4293 19.2699 56.0228 19.6361 56.3889C19.8191 56.5719 20.0591 56.6635 20.299 56.6635C20.5389 56.6635 20.7789 56.572 20.9619 56.3889L21.7379 55.6129C22.4301 56.2534 23.1599 56.8534 23.9238 57.4098L23.3154 58.3201C23.0278 58.7506 23.1435 59.3329 23.574 59.6205C23.7341 59.7274 23.9151 59.7786 24.0941 59.7786C24.3967 59.7786 24.6938 59.6324 24.8745 59.3619L25.4811 58.4543C26.2828 58.9475 27.1156 59.3944 27.9758 59.7924L27.5596 60.797C27.3615 61.2754 27.5886 61.8238 28.0671 62.0219C28.1843 62.0705 28.306 62.0935 28.4255 62.0935C28.7934 62.0935 29.1425 61.8755 29.292 61.5145L29.7069 60.5129C30.5871 60.8388 31.4918 61.1136 32.4169 61.3355L32.2055 62.3981C32.1045 62.9059 32.4343 63.3995 32.9422 63.5005C33.004 63.5128 33.0655 63.5187 33.1261 63.5187C33.5643 63.5187 33.9559 63.21 34.0447 62.764L34.2561 61.7013C35.1793 61.8471 36.1199 61.9393 37.0746 61.9761V63.0625C37.0746 63.5802 37.4944 64 38.0122 64C38.53 64 38.9497 63.5802 38.9497 63.0625V61.9761C39.9044 61.9393 40.845 61.8471 41.7682 61.7013L41.9796 62.764C42.0684 63.2101 42.46 63.5187 42.8982 63.5187C42.9588 63.5187 43.0205 63.5129 43.0821 63.5005C43.5899 63.3995 43.9198 62.9059 43.8188 62.3981L43.6074 61.3355C44.5325 61.1136 45.437 60.8388 46.3174 60.5129L46.7323 61.5145C46.8818 61.8755 47.2309 62.0935 47.5989 62.0935C47.7185 62.0935 47.84 62.0705 47.9573 62.0219C48.4357 61.8238 48.6628 61.2754 48.4647 60.797L48.0485 59.7924C48.9087 59.3945 49.7415 58.9475 50.5432 58.4543L51.1498 59.3619C51.3305 59.6324 51.6276 59.7786 51.9302 59.7786C52.1092 59.7786 52.2902 59.7275 52.4503 59.6205C52.8808 59.3329 52.9966 58.7506 52.7089 58.3201L52.1005 57.4098C52.8643 56.8535 53.5942 56.2534 54.2864 55.6129L55.0624 56.3889C55.2454 56.572 55.4854 56.6635 55.7253 56.6635C55.9652 56.6635 56.2052 56.572 56.3882 56.3889C56.7544 56.0228 56.7544 55.4292 56.3882 55.0632L55.6122 54.2872C56.2527 53.5951 56.8528 52.8653 57.4091 52.1016L58.3195 52.7099C58.4795 52.8168 58.6605 52.8681 58.8396 52.8681C59.1422 52.8681 59.4392 52.7218 59.62 52.4513C59.9077 52.0208 59.7919 51.4386 59.3614 51.1509L58.4537 50.5444C58.9469 49.7428 59.3939 48.9099 59.7919 48.0499L60.7966 48.4661C60.9139 48.5147 61.0355 48.5377 61.155 48.5377C61.5229 48.5377 61.8721 48.3197 62.0216 47.9587C62.2197 47.4803 61.9926 46.932 61.5142 46.7338L60.5125 46.319C60.8384 45.4388 61.1133 44.5343 61.3351 43.6093L62.3979 43.8207C62.4596 43.833 62.5211 43.839 62.5818 43.839C63.0199 43.839 63.4116 43.5302 63.5003 43.0842C63.6013 42.5765 63.2716 42.0829 62.7636 41.9819L61.7008 41.7705C61.8467 40.8474 61.9387 39.9069 61.9757 38.9522L63.0624 38.9524Z" fill="#FF0000"></path><path d="M5.95308 5.01618H5.94308C5.42528 5.01618 5.01049 5.43593 5.01049 5.95368C5.01049 6.47156 5.43528 6.89119 5.95308 6.89119C6.47088 6.89119 6.89067 6.47156 6.89067 5.95368C6.89067 5.43593 6.47088 5.01618 5.95308 5.01618Z" fill="#FF0000"></path><path d="M38.007 38.9523H38.017C38.5349 38.9523 38.9496 38.5326 38.9496 38.0148C38.9496 37.497 38.5249 37.0773 38.007 37.0773C37.4892 37.0773 37.0694 37.497 37.0694 38.0148C37.0694 38.5326 37.4892 38.9523 38.007 38.9523Z" fill="#FF0000"></path><path d="M21.1025 27.4087C20.6127 28.1889 20.5116 29.132 20.8252 29.9962C21.1365 30.8544 21.8127 31.5081 22.6803 31.79L27.909 33.4887L30.8171 36.3966C30.9378 36.5175 31.0493 36.6492 31.1564 36.7862L21.9553 33.7971C21.0955 33.5178 20.1697 33.6442 19.4155 34.1442C18.6623 34.6436 18.1859 35.4456 18.1085 36.3447C18.0606 36.9006 18.0364 37.4624 18.0364 38.0148C18.0364 42.703 19.7061 47.2638 22.738 50.8568C23.3079 51.5321 24.1291 51.9135 25.0056 51.9134C25.0421 51.9134 25.0787 51.9128 25.1155 51.9114C26.0242 51.8784 26.8517 51.4378 27.386 50.7024L33.6599 42.0679C33.7078 42.1193 33.7566 42.17 33.8065 42.2199C34.2701 42.6835 34.799 43.0595 35.3698 43.343L29.0858 51.9916C28.5546 52.7226 28.3897 53.6412 28.6334 54.5116C28.8789 55.389 29.5031 56.0946 30.3455 56.4475C32.7866 57.47 35.3661 57.9885 38.0121 57.9885C40.658 57.9885 43.2374 57.47 45.6786 56.4475C46.5212 56.0946 47.1452 55.389 47.3907 54.5116C47.6344 53.6412 47.4695 52.7226 46.9383 51.9915L40.6525 43.3405C41.2891 43.024 41.8685 42.5944 42.3629 42.0661L48.6382 50.7023C49.1725 51.4376 50.0002 51.8783 50.9089 51.9113C50.9455 51.9126 50.9822 51.9133 51.0187 51.9133C51.8949 51.9133 52.7163 51.532 53.2861 50.8566C56.318 47.2637 57.9878 42.7031 57.9878 38.0146C57.9878 37.4622 57.9635 36.9003 57.9156 36.3445C57.8383 35.4453 57.3618 34.6433 56.6087 34.144C55.8543 33.644 54.9286 33.5176 54.0688 33.7968L43.8946 37.1021C43.7857 36.401 43.5515 35.7165 43.1935 35.0875L53.3439 31.7897C54.2114 31.5079 54.8876 30.8541 55.1989 29.996C55.5124 29.1317 55.4114 28.1886 54.9216 27.4085C52.1329 22.9665 47.8093 19.8414 42.7472 18.6088C41.8506 18.3904 40.9222 18.5907 40.1999 19.1582C39.4872 19.718 39.0784 20.559 39.0784 21.4653V32.1736C38.2392 32.0051 37.5246 31.7102 36.9455 31.2932V21.4652C36.9455 20.5589 36.5367 19.718 35.824 19.158C35.1018 18.5907 34.1731 18.3904 33.2767 18.6087C31.0161 19.1592 28.894 20.0932 26.9586 21.3862L13.0982 7.52697C12.4351 6.86385 11.9892 5.95036 11.7728 4.81161C11.4816 3.27787 10.6034 1.93787 9.29987 1.03813C7.34382 -0.311989 4.70285 -0.348364 2.7283 0.947504C1.19817 1.95187 0.215089 3.55412 0.0315738 5.34336C-0.152067 7.13272 0.471486 8.88784 1.74234 10.1586C2.56979 10.986 3.61488 11.5431 4.76473 11.77C5.94133 12.002 6.88403 12.4656 7.56634 13.1478L21.3879 26.9681C21.2908 27.1141 21.1951 27.2612 21.1025 27.4087ZM23.2598 30.0067C22.9457 29.9047 22.7008 29.6679 22.588 29.3567C22.4729 29.0395 22.5102 28.6927 22.6906 28.4056C22.7079 28.3782 22.7263 28.3511 22.7436 28.3239L24.9885 30.5684L23.2598 30.0067ZM25.869 49.6004C25.6758 49.8664 25.3764 50.0258 25.0475 50.0378C24.7091 50.0503 24.3908 49.9079 24.1713 49.6478C21.4243 46.3925 19.9115 42.2612 19.9115 38.0149C19.9115 37.5161 19.9334 37.0082 19.9767 36.5056C20.0048 36.1796 20.1778 35.8885 20.4516 35.7071C20.7263 35.525 21.0634 35.4788 21.3759 35.5805L32.1699 39.0871C32.1779 39.1246 32.1877 39.1601 32.1952 39.1981C32.2763 39.6096 32.4006 40.0076 32.5637 40.3872L25.869 49.6004ZM45.4213 53.0939C45.6137 53.3586 45.6733 53.6912 45.5851 54.0065C45.4948 54.3287 45.2649 54.5882 44.9542 54.7184C42.7437 55.6444 40.4081 56.1139 38.0122 56.1139C35.6162 56.1139 33.2807 55.6444 31.0702 54.7184C30.7594 54.5882 30.5294 54.3287 30.4393 54.0065C30.351 53.6912 30.4107 53.3586 30.6031 53.094L37.2723 43.9152C37.5146 43.9453 37.7597 43.9623 38.0066 43.9623C38.2108 43.9623 38.4166 43.9518 38.6225 43.9307C38.6656 43.9263 38.7081 43.9192 38.751 43.9138L45.4213 53.0939ZM54.6484 35.5803C54.9611 35.4787 55.298 35.5248 55.5727 35.707C55.8463 35.8883 56.0195 36.1795 56.0476 36.5055C56.0909 37.0081 56.1127 37.5158 56.1127 38.0148C56.1127 42.2613 54.6 46.3925 51.8531 49.6476C51.6337 49.9078 51.3141 50.05 50.9769 50.0376C50.648 50.0258 50.3486 49.8664 50.1552 49.6003L43.4702 40.4001C43.6566 39.9759 43.7903 39.5329 43.8714 39.0812L54.6484 35.5803ZM41.3586 20.6327C41.6255 20.423 41.9699 20.3494 42.3038 20.4308C46.8888 21.5473 50.8059 24.3794 53.3336 28.4056C53.514 28.6929 53.5514 29.0396 53.4363 29.3567C53.3235 29.6677 53.0786 29.9046 52.7645 30.0067L41.916 33.5313C41.6176 33.2718 41.2955 33.0443 40.9537 32.8508V21.4654C40.9538 21.0177 41.2075 20.7515 41.3586 20.6327ZM33.7206 20.4308C34.0544 20.3495 34.3989 20.423 34.6658 20.6327C34.8169 20.7514 35.0706 21.0177 35.0706 21.4654V29.4974L28.3134 22.7406C29.9809 21.6758 31.7954 20.8997 33.7206 20.4308ZM5.12751 9.93034C4.34382 9.77584 3.63176 9.39634 3.06821 8.83284C2.19801 7.96272 1.7711 6.7606 1.89686 5.53473C2.02449 4.29111 2.6853 3.21874 3.75739 2.515C4.41182 2.0855 5.17426 1.87162 5.9387 1.87162C6.7434 1.87162 7.55022 2.10875 8.23465 2.58125C9.12973 3.19899 9.73203 4.11536 9.93067 5.16148C10.2184 6.67685 10.8381 7.91872 11.7722 8.85284L35.1128 32.1914C36.0469 33.1253 37.2889 33.7448 38.8043 34.0326C39.8502 34.2312 40.7667 34.8333 41.3846 35.7282C42.3062 37.0626 42.3329 38.8617 41.4514 40.2049C40.7476 41.2772 39.6751 41.9379 38.4311 42.0656C37.205 42.1913 36.0029 41.7646 35.1326 40.8943C34.569 40.3308 34.1895 39.6188 34.035 38.8352C33.7297 37.2873 33.0931 36.0207 32.1431 35.0708L8.89233 11.8221C7.94212 10.8721 6.67564 10.2357 5.12751 9.93034Z" fill="#FF0000"></path></svg>
                    <h5 className='mt-4'>Complete Overhaul</h5>
                    <p className='mt-4'>In this part we make quality product <br /> and make the suspense better to better</p>

                </div>
                <div>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="64" height="59" viewBox="0 0 64 59" fill="none"><path d="M55.8015 8.20008C50.5145 2.91214 43.4851 0 36.0082 0H0.93753C0.493404 0 0.110279 0.31168 0.0197786 0.746508C-0.0707215 1.18134 0.156029 1.62004 0.56328 1.79744L4.00816 3.29784V9.41705L3.33453 9.10612C2.91341 8.91184 2.41378 9.05449 2.15878 9.44156C1.90366 9.82875 1.96991 10.3442 2.31453 10.6544L4.00816 12.1789V16.4571C4.00816 18.9271 4.66591 21.3605 5.91029 23.4942L10.279 30.9848L6.67004 32.1127C6.32054 32.222 6.06654 32.5248 6.01979 32.8881C5.97304 33.2514 6.14216 33.6086 6.45279 33.8028L6.95479 34.1166C9.40079 35.6456 12.2104 36.609 15.0799 36.9026C15.7148 36.9676 16.3533 36.9998 16.9922 36.9997C17.0792 36.9997 17.1663 36.998 17.2533 36.9968C17.2586 37.0007 17.2633 37.0052 17.2687 37.0091L42.0846 54.7379V57.0602C42.0846 58.1298 42.9546 59 44.0241 59H48.0322C49.1017 59 49.9717 58.1298 49.9717 57.0602V51.047C49.9717 50.3173 49.5665 49.6811 48.9697 49.3499V28.9345H63.0625C63.5803 28.9345 64 28.5147 64 27.9969C64.0001 20.5187 61.0884 13.488 55.8015 8.20008ZM5.88304 4.11448L9.58842 5.72839C10.0632 5.93531 10.6155 5.71789 10.8223 5.24306C11.029 4.76822 10.8118 4.21575 10.337 4.00896L5.43841 1.87533H36.0082C49.923 1.87533 61.3296 12.8159 62.084 26.548L14.0916 5.64425C13.6167 5.43722 13.0644 5.65476 12.8577 6.12959C12.6509 6.60443 12.8682 7.1569 13.3429 7.36369L58.5619 27.0592H42.2261L5.88304 10.2826V4.11448ZM7.52979 22.5494C6.45241 20.7022 5.88304 18.5956 5.88304 16.4572V13.8668L21.1316 27.5929L12.1149 30.411L7.52979 22.5494ZM9.26192 33.2675L23.2616 28.8919C23.5831 28.7914 23.8261 28.5261 23.8978 28.1969C23.9697 27.8677 23.8594 27.5253 23.6091 27.2999L8.17304 13.4051L39.5773 27.902L22.9496 34.0614C18.4899 35.7134 13.4784 35.4029 9.26192 33.2675ZM20.1192 36.7412C21.0477 36.5874 21.9646 36.3657 22.8589 36.0765L42.3802 50.0229C42.1941 50.3206 42.0847 50.671 42.0847 51.0473V52.4336L20.1192 36.7412ZM48.0969 57.0605C48.0969 57.0962 48.068 57.125 48.0324 57.125H44.0242C43.9886 57.125 43.9597 57.0962 43.9597 57.0605V51.0473C43.9597 51.0118 43.9886 50.9829 44.0241 50.9828H44.0245H48.0251C48.0276 50.9828 48.03 50.9832 48.0324 50.9832H48.0339C48.0687 50.984 48.0969 51.0123 48.0969 51.0475V57.0605ZM47.0949 49.1075H44.3247L25.0002 35.3017L42.1882 28.9346H43.0867V45.0344C43.0867 45.5522 43.5065 45.9721 44.0242 45.9721C44.542 45.9721 44.9617 45.5522 44.9617 45.0344V28.9345H47.0949V49.1075Z" fill="#FF0000"></path></svg>
                    <h5 className='mt-4'>Custom Parts & Accessories</h5>
                    <p className='mt-4'>You can fine all kind of custom parts on here <br /> and our customer we provide free service</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="64" viewBox="0 0 62 64" fill="none"><path d="M61.6478 40.572L32.9852 17.7556C32.4991 17.3686 31.7601 17.5806 31.5459 18.1687L22.8259 42.0887C22.464 43.0835 20.8692 42.4852 21.2312 41.4902L34.3072 5.48274H36.1426L35.0136 8.5862C34.794 9.18979 35.2479 9.8506 35.8819 9.8506H61.0765C62.2348 9.8506 62.2875 7.97222 61.0765 7.97222H37.2101L38.7676 3.69077C39.3863 1.93298 38.0285 0 36.192 0H22.6992C19.108 0 16.02 3.06113 16.0818 6.73011C16.1423 10.3146 19.0659 13.2308 22.5989 13.2308H25.5294C29.0337 13.2308 29.1041 7.74794 25.5798 7.74794H22.6534C22.0412 7.74794 21.4729 7.23289 21.4835 6.59587C21.4935 5.98214 21.9939 5.48287 22.5989 5.48287H32.3346L27.042 20.0572C13.5014 16.6546 -0.177443 27.6074 0.00174144 41.7898C1.20939 71.406 42.7898 71.4009 43.9946 41.7896C44.071 33.5972 39.3009 25.692 32.1311 21.9774L32.8415 20.0285L60.5053 42.0499C61.4166 42.7752 62.6006 41.3305 61.6478 40.572ZM19.6326 6.56444C19.6051 8.23595 21.02 9.62632 22.6534 9.62632H25.5798C26.7031 9.62632 26.6624 11.3524 25.5294 11.3524H22.5989C20.0693 11.3524 17.976 9.26442 17.9327 6.69805C17.8882 4.06807 20.1329 1.87838 22.6992 1.87838H36.192C37.2948 1.87838 37.3489 3.60449 36.2334 3.60449H22.5987C20.9899 3.60449 19.6594 4.93238 19.6326 6.56444ZM21.175 36.2125C20.9518 36.246 20.733 36.2928 20.5192 36.3522L15.8767 26.1362C18.7664 24.9573 22.0738 24.6398 25.1551 25.2528L21.175 36.2125ZM14.1978 26.9272L18.8402 37.1428C18.138 37.6307 17.5506 38.2755 17.1265 39.025L6.75152 35.1425C8.23399 31.6503 10.8939 28.7198 14.1978 26.9272ZM19.2139 46.7956L15.4163 57.2449C12.0186 55.7722 9.09721 53.0306 7.36954 49.7287L17.3585 45.0545C17.8383 45.7674 18.4733 46.3647 19.2139 46.7956ZM20.9503 47.4469C21.7859 47.6075 22.656 47.5736 23.477 47.3458L28.0749 57.4632C24.7269 58.837 20.6535 59.0144 17.1535 57.8943L20.9503 47.4469ZM29.7555 56.6761L25.1569 46.5572C25.8596 46.0702 26.4483 45.4259 26.8729 44.6743L37.2012 48.5393C35.6927 52.0262 33.0525 54.8989 29.7555 56.6761ZM38.5923 41.7897C38.5923 43.5263 38.3319 45.2023 37.8489 46.7797L27.5146 42.9123C27.6738 42.0766 27.6384 41.1698 27.4135 40.3491L37.4508 35.6522C38.2022 37.5963 38.5923 39.6745 38.5923 41.7897ZM26.6385 38.6434C26.5177 38.463 26.3864 38.2894 26.2453 38.1234L30.2368 27.1738C32.9534 28.7532 35.2126 31.121 36.6789 33.945L26.6385 38.6434ZM22.1289 44.4848C23.2245 44.4848 24.1835 43.7809 24.5624 42.7398L25.4452 40.3179C26.5535 42.7751 24.665 45.7105 21.9981 45.6683C17.9762 45.6093 16.8115 40.1769 20.38 38.4017L19.4945 40.8401C18.8308 42.6646 20.2696 44.4848 22.1289 44.4848ZM38.9231 30.7106C47.602 44.0592 37.7667 62.3775 21.9979 62.2369C10.8898 62.237 1.8527 53.0644 1.8527 41.7897C1.69745 28.8881 14.0418 18.8849 26.3968 21.8334L25.8027 23.4692C15.2732 21.0637 4.48358 29.2309 3.62566 40.1192C3.51867 41.3418 5.36259 41.5056 5.46946 40.2854C5.57053 39.1308 5.78859 37.9994 6.11537 36.9062L16.4824 40.7858C16.3228 41.6334 16.3569 42.5165 16.5813 43.3495L6.58616 48.0267C6.17115 46.9757 5.85942 45.8808 5.66198 44.7578C5.45836 43.6008 3.6269 43.878 3.83953 45.0878C5.23931 53.7858 13.2948 60.6518 21.9981 60.5106C41.0427 60.29 47.4168 34.8967 30.887 25.3897L31.4832 23.7542C34.4959 25.3921 37.0543 27.7805 38.9231 30.7106Z" fill="#FF0000"></path><path d="M61.0766 11.5769H50.0112C48.8529 11.5769 48.8002 13.4552 50.0112 13.4552H61.0766C62.2348 13.4552 62.2875 11.5769 61.0766 11.5769Z" fill="#FF0000"></path><path d="M45.0749 13.4552C46.2332 13.4552 46.2859 11.5769 45.0749 11.5769H34.5705C34.1806 11.5769 33.8325 11.8249 33.6999 12.1972L32.8975 14.4529C32.7613 14.8363 32.8841 15.2651 33.2017 15.5146L60.5101 36.9564C61.4471 37.6922 62.5868 36.2121 61.643 35.4709L34.8675 14.4474L35.2204 13.4552H45.0749Z" fill="#FF0000"></path></svg>
                    <h5 className='mt-4'>Bike Fitting & Delivery</h5>
                    <p className='mt-4'>We deliverd the product in every location <br /> whice the customer wants</p>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;