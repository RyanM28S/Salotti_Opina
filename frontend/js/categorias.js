const cantina = document.getElementById('cantina');
const prin = document.getElementById('corpoCa');
const cssP = document.getElementById("cssP");

cantina.addEventListener('click', () => {
    prin.innerHTML = `
    <div class="container">
            <a href="categorias.html" class="back-link">← Voltar para categorias</a>

            <header class="card header-card">
                <div class="header-info">
                    <h1>Cantina</h1>
                    <p>234 avaliações</p>
                    <button class="btn-primary">Avaliar esta categoria</button>
                </div>
                <div class="rating-badge">
                    <span class="star-icon">★</span>
                    <div class="score-box">
                        <span class="score-main">4.2</span>
                        <span class="score-sub">de 5.0</span>
                    </div>
                </div>
            </header>

            <section class="card aspects-card">
                <h2>Avaliação por Aspectos</h2>
                <div class="aspects-grid">
                    <div class="aspect-item">
                        <div class="aspect-label"><span>Qualidade</span> <strong>4.3/5.0</strong></div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 86%;"></div>
                        </div>
                    </div>
                    <div class="aspect-item">
                        <div class="aspect-label"><span>Preço</span> <strong>4/5.0</strong></div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 80%;"></div>
                        </div>
                    </div>
                    <div class="aspect-item">
                        <div class="aspect-label"><span>Variedade</span> <strong>4.4/5.0</strong></div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 88%;"></div>
                        </div>
                    </div>
                    <div class="aspect-item">
                        <div class="aspect-label"><span>Atendimento</span> <strong>4.2/5.0</strong></div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 84%;"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card reviews-card">
                <h2>Avaliações</h2>

                <div class="review-item">
                    <div class="review-header">
                        <div class="user-avatar" style="background-color: #e0e7ff; color: #6366f1;">A</div>
                        <div class="user-info">
                            <span class="user-name">Aluno A</span>
                            <span class="review-date"><i class="far fa-clock"></i> 09/02/2026</span>
                        </div>
                        <div class="stars">★★★★★</div>
                    </div>
                    <p class="review-text">Comida muito boa e preço justo!</p>
                    <div class="review-actions">
                        <span><i class="far fa-thumbs-up"></i> 18</span>
                        <span><i class="far fa-thumbs-down"></i></span>
                    </div>
                </div>

                <div class="review-item">
                    <div class="review-header">
                        <div class="user-avatar" style="background-color: #eff6ff; color: #3b82f6;">B</div>
                        <div class="user-info">
                            <span class="user-name">Aluno B</span>
                            <span class="review-date"><i class="far fa-clock"></i> 07/02/2026</span>
                        </div>
                        <div class="stars">★★★<span class="star-off">☆☆</span></div>
                    </div>
                    <p class="review-text">Poderia ter mais opções vegetarianas.</p>
                    <div class="review-actions">
                        <span><i class="far fa-thumbs-up"></i> 12</span>
                        <span><i class="far fa-thumbs-down"></i></span>
                    </div>
                </div>
            </section>
        </div>
    `
    cssP.href = "../css/cantina.css"
})
const wi = document.getElementById('wi');

wi.addEventListener('click', () => {
    prin.innerHTML = `
    <div class="container">
        <a href="categorias.html" class="back-link">← Voltar para categorias</a>

        <header class="card header-card">
            <div class="header-info">
                <h1>Internet</h1>
                <p>997 avaliações</p>
                <button class="btn-primary">Avaliar esta categoria</button>
            </div>
            <div class="rating-badge">
                <span class="star-icon">★</span>
                <div class="score-box">
                    <span class="score-main">2.0</span>
                    <span class="score-sub">de 5.0</span>
                </div>
            </div>
        </header>

        <section class="card aspects-card">
            <h2>Avaliação por Aspectos</h2>
            <div class="aspects-grid">
                <div class="aspect-item">
                    <div class="aspect-label"><span>Qualidade</span> <strong>3.0/5.0</strong></div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 86%;"></div>
                    </div>
                </div>
                <div class="aspect-item">
                    <div class="aspect-label"><span>Acessivel</span> <strong>4.7/5.0</strong></div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 88%;"></div>
                    </div>
                </div>
                <div class="aspect-item">
                    <div class="aspect-label"><span>Atendimento</span> <strong>4.2/5.0</strong></div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 84%;"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="card reviews-card">
            <h2>Avaliações</h2>

            <div class="review-item">
                <div class="review-header">
                    <div class="user-avatar" style="background-color: #e0e7ff; color: #6366f1;">A</div>
                    <div class="user-info">
                        <span class="user-name">Aluno A</span>
                        <span class="review-date"><i class="far fa-clock"></i> 09/02/2026</span>
                    </div>
                    <div class="stars">★★★★<span class="star-off">☆</span></div>
                </div>
                <p class="review-text">A internet é acessivel a todos!</p>
                <div class="review-actions">
                    <span><i class="far fa-thumbs-up"></i> 12</span>
                    <span><i class="far fa-thumbs-down"></i></span>
                </div>
            </div>

            <div class="review-item">
                <div class="review-header">
                    <div class="user-avatar" style="background-color: #eff6ff; color: #3b82f6;">B</div>
                    <div class="user-info">
                        <span class="user-name">Aluno B</span>
                        <span class="review-date"><i class="far fa-clock"></i> 07/02/2026</span>
                    </div>
                    <div class="stars">★★<span class="star-off">☆☆☆</span></div>
                </div>
                <p class="review-text">Essa internet é muito ruim, não roda brawlstars.</p>
                <div class="review-actions">
                    <span><i class="far fa-thumbs-up"></i> 10</span>
                    <span><i class="far fa-thumbs-down"></i></span>
                </div>
            </div>
        </section>
    </div>
    `
    cssP.href = "../css/internet.css"
})
const bib = document.getElementById('bib');

bib.addEventListener('click', () => {
    prin.innerHTML = `
    
        <div class="container">
            <a href="categorias.html" class="back-link">← Voltar para categorias</a>

            <header class="card header-card">
                <div class="header-info">
                    <h1>Biblioteca</h1>
                    <p>200 avaliações</p>
                    <button class="btn-primary">Avaliar esta categoria</button>
                </div>
                <div class="rating-badge">
                    <span class="star-icon">★</span>
                    <div class="score-box">
                        <span class="score-main">4.5</span>
                        <span class="score-sub">de 5.0</span>
                    </div>
                </div>
            </header>

            <section class="card aspects-card">
                <h2>Avaliação por Aspectos</h2>
                <div class="aspects-grid">
                    <div class="aspect-item">
                        <div class="aspect-label"><span>Qualidade</span> <strong>2.3/5.0</strong></div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 86%;"></div>
                        </div>
                    </div>
                    <div class="aspect-item">
                        <div class="aspect-label"><span>Variedade</span> <strong>4.7/5.0</strong></div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 88%;"></div>
                        </div>
                    </div>
                    <div class="aspect-item">
                        <div class="aspect-label"><span>Atendimento</span> <strong>5.0/5.0</strong></div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 84%;"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="card reviews-card">
                <h2>Avaliações</h2>

                <div class="review-item">
                    <div class="review-header">
                        <div class="user-avatar" style="background-color: #e0e7ff; color: #6366f1;">A</div>
                        <div class="user-info">
                            <span class="user-name">Aluno A</span>
                            <span class="review-date"><i class="far fa-clock"></i> 09/02/2026</span>
                        </div>
                        <div class="stars">★★★★★</div>
                    </div>
                    <p class="review-text">A variedade dos livros são muito boas, ameei!</p>
                    <div class="review-actions">
                        <span><i class="far fa-thumbs-up"></i> 21</span>
                        <span><i class="far fa-thumbs-down"></i></span>
                    </div>
                </div>

                <div class="review-item">
                    <div class="review-header">
                        <div class="user-avatar" style="background-color: #eff6ff; color: #3b82f6;">B</div>
                        <div class="user-info">
                            <span class="user-name">Aluno B</span>
                            <span class="review-date"><i class="far fa-clock"></i> 07/02/2026</span>
                        </div>
                        <div class="stars">★★★★★</div>
                    </div>
                    <p class="review-text">O local é bem quieto, ótimo para ler.</p>
                    <div class="review-actions">
                        <span><i class="far fa-thumbs-up"></i> 15</span>
                        <span><i class="far fa-thumbs-down"></i></span>
                    </div>
                </div>
            </section>
        </div>
    `
    cssP.href = "../css/biblioteca.css"
})
const inf = document.getElementById('inf');

inf.addEventListener('click', () => {
    prin.innerHTML = `
    <div class="container">
        <a href="categorias.html" class="back-link">← Voltar para categorias</a>

        <header class="card header-card">
            <div class="header-info">
                <h1>Infraestrutura</h1>
                <p>342 avaliações</p>
                <button class="btn-primary">Avaliar esta categoria</button>
            </div>
            <div class="rating-badge">
                <span class="star-icon">★</span>
                <div class="score-box">
                    <span class="score-main">4.0</span>
                    <span class="score-sub">de 5.0</span>
                </div>
            </div>
        </header>

        <section class="card aspects-card">
            <h2>Avaliação por Aspectos</h2>
            <div class="aspects-grid">
                <div class="aspect-item">
                    <div class="aspect-label"><span>Qualidade</span> <strong>3.9/5.0</strong></div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 86%;"></div>
                    </div>
                </div>
                <div class="aspect-item">
                    <div class="aspect-label"><span>Barulho</span> <strong>1.7/5.0</strong></div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 88%;"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="card reviews-card">
            <h2>Avaliações</h2>

            <div class="review-item">
                <div class="review-header">
                    <div class="user-avatar" style="background-color: #e0e7ff; color: #6366f1;">A</div>
                    <div class="user-info">
                        <span class="user-name">Aluno A</span>
                        <span class="review-date"><i class="far fa-clock"></i> 09/02/2026</span>
                    </div>
                    <div class="stars">★★★★<span class="star-off">☆</span></div>
                </div>
                <p class="review-text">A escola é bem limpinha!</p>
                <div class="review-actions">
                    <span><i class="far fa-thumbs-up"></i> 26</span>
                    <span><i class="far fa-thumbs-down"></i></span>
                </div>
            </div>

            <div class="review-item">
                <div class="review-header">
                    <div class="user-avatar" style="background-color: #eff6ff; color: #3b82f6;">B</div>
                    <div class="user-info">
                        <span class="user-name">Aluno B</span>
                        <span class="review-date"><i class="far fa-clock"></i> 07/02/2026</span>
                    </div>
                    <div class="stars">★★★★<span class="star-off">☆</span></div>
                </div>
                <p class="review-text">A escola de vez em nunca quebra algo dentro dela.</p>
                <div class="review-actions">
                    <span><i class="far fa-thumbs-up"></i> 7</span>
                    <span><i class="far fa-thumbs-down"></i></span>
                </div>
            </div>
        </section>
    </div>
    `
    cssP.href = "../css/infra.css"
})
const at = document.getElementById('att');

at.addEventListener('click', () => {
    prin.innerHTML = `

    <div class="container">
        <a href="categorias.html" class="back-link">← Voltar para categorias</a>

        <header class="card header-card">
            <div class="header-info">
                <h1>Atendimento</h1>
                <p>208 avaliações</p>
                <button class="btn-primary">Avaliar esta categoria</button>
            </div>
            <div class="rating-badge">
                <span class="star-icon">★</span>
                <div class="score-box">
                    <span class="score-main">4.0</span>
                    <span class="score-sub">de 5.0</span>
                </div>
            </div>
        </header>

        <section class="card aspects-card">
            <h2>Avaliação por Aspectos</h2>
            <div class="aspects-grid">
                <div class="aspect-item">
                    <div class="aspect-label"><span>Qualidade</span> <strong>2.5/5.0</strong></div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 86%;"></div>
                    </div>
                </div>
                <div class="aspect-item">
                    <div class="aspect-label"><span>Atendimento</span> <strong>3.7/5.0</strong></div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 84%;"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="card reviews-card">
            <h2>Avaliações</h2>

            <div class="review-item">
                <div class="review-header">
                    <div class="user-avatar" style="background-color: #e0e7ff; color: #6366f1;">A</div>
                    <div class="user-info">
                        <span class="user-name">Aluno A</span>
                        <span class="review-date"><i class="far fa-clock"></i> 09/02/2026</span>
                    </div>
                    <div class="stars">★★★★★</div>
                </div>
                <p class="review-text">Os tios/tias sempre nos recebem tão bem!</p>
                <div class="review-actions">
                    <span><i class="far fa-thumbs-up"></i> 43</span>
                    <span><i class="far fa-thumbs-down"></i></span>
                </div>
            </div>

            <div class="review-item">
                <div class="review-header">
                    <div class="user-avatar" style="background-color: #eff6ff; color: #3b82f6;">B</div>
                    <div class="user-info">
                        <span class="user-name">Aluno B</span>
                        <span class="review-date"><i class="far fa-clock"></i> 07/02/2026</span>
                    </div>
                    <div class="stars">★★★★★</div>
                </div>
                <p class="review-text">Os professores do técnico são os melhores, só venho pra aula deles.</p>
                <div class="review-actions">
                    <span><i class="far fa-thumbs-up"></i> 159</span>
                    <span><i class="far fa-thumbs-down"></i></span>
                </div>
            </div>
        </section>
    </div>

    `
    cssP.href = "../css/atendimento.css"
})
