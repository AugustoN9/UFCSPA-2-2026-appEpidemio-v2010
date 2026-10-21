function responderQuestao(idQuestao, alternativaSelecionada, alternativaCorreta) {
        const container = document.getElementById(`options-${idQuestao}`);
        const botoes = container.getElementsByClassName('quiz-option');
        const justificativa = document.getElementById(`justificativa-${idQuestao}`);

        // Desabilita novas escolhas
        for (let btn of botoes) {
          btn.classList.add('disabled');
          btn.removeAttribute('onclick');

          const letraOpcao = btn.innerText.trim().charAt(0);
          
          if (letraOpcao === alternativaCorreta) {
            btn.classList.add('correct');
            btn.innerHTML = `<i class="fa-solid fa-circle-check me-2 text-success"></i> ${btn.innerText}`;
          } else if (letraOpcao === alternativaSelecionada) {
            btn.classList.add('incorrect');
            btn.innerHTML = `<i class="fa-solid fa-circle-xmark me-2 text-danger"></i> ${btn.innerText}`;
          }
        }

        // Exibe a caixa explicativa
        if (justificativa) {
          justificativa.classList.remove('d-none');
        }

        // Alerta dinâmico de feedback
        if (alternativaSelecionada === alternativaCorreta) {
          Swal.fire({
            icon: 'success',
            title: 'Resposta Correta! 🎉',
            text: 'Você acertou a questão. Confira a justificativa detalhada abaixo.',
            timer: 2000,
            showConfirmButton: false
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Resposta Incorreta!',
            text: `A alternativa correta era a ${alternativaCorreta}. Leia a justificativa para entender o conceito.`,
            confirmButtonText: 'Entendido'
          });
        }
      }

      function mostrarConceitoEstudo() {
        Swal.fire({
          title: "<strong>Conceitos Epidemiológicos de ECR</strong>",
          icon: "info",
          width: '700px',
          html: `
            <div class="text-start">
                <p><strong>1. Ocultação da Alocação:</strong></p>
                <p class="small text-muted mb-2">Garante que a alocação do próximo paciente permaneça imprevisível até sua inclusão irreversível no estudo.</p>
                
                <p><strong>2. RRR vs. RAR & NNT:</strong></p>
                <p class="small text-muted mb-2">A RRR mede o ganho relativo, enquanto a RAR e o NNT medem o real impacto prático e custo-efetividade na população.</p>
                
                <p><strong>3. ATS e Incorporação de Tecnologias:</strong></p>
                <p class="small text-muted mb-0">Tecnologias em saúde requerem análises de efetividade pragmática, usabilidade e impacto orçamentário para o SUS.</p>
            </div>
          `,
          confirmButtonText: "Entendi",
        });
      }