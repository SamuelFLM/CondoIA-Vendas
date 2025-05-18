"use client"

import { Building } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { AppleButton } from "@/components/ui/apple-button"

export function DashboardSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-purple-600 text-white border-purple-600 dark:bg-purple-600 dark:text-white dark:border-purple-600">
              Dashboard
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight">
              Gestão completa de chamados
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visualize, gerencie e resolva solicitações dos moradores com um painel administrativo completo e
              intuitivo.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <div className="bg-purple-50 dark:bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Estatísticas em tempo real</h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-muted-foreground">Chamados abertos</p>
                  <div className="flex items-end justify-between mt-2">
                    <p className="text-3xl font-bold text-purple-600">24</p>
                    <div className="flex items-center text-green-500 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-1"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                      <span>12%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-muted-foreground">Tempo médio de resolução</p>
                  <div className="flex items-end justify-between mt-2">
                    <p className="text-3xl font-bold text-purple-600">1.2h</p>
                    <div className="flex items-center text-green-500 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-1"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                      <span>30%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-muted-foreground">Chamados resolvidos</p>
                  <div className="flex items-end justify-between mt-2">
                    <p className="text-3xl font-bold text-purple-600">142</p>
                    <div className="flex items-center text-green-500 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-1"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                      <span>18%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-muted-foreground">Satisfação dos moradores</p>
                  <div className="flex items-end justify-between mt-2">
                    <p className="text-3xl font-bold text-purple-600">96%</p>
                    <div className="flex items-center text-green-500 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-1"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                      <span>5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Chamados recentes</h3>
              <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        <th className="whitespace-nowrap px-4 py-3 text-left font-medium">ID</th>
                        <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Morador</th>
                        <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Assunto</th>
                        <th className="whitespace-nowrap px-4 py-3 text-left font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-950">
                      <tr>
                        <td className="whitespace-nowrap px-4 py-3 font-medium">#1234</td>
                        <td className="whitespace-nowrap px-4 py-3">Ana Silva</td>
                        <td className="whitespace-nowrap px-4 py-3">Vazamento no banheiro</td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-50 text-yellow-600 border-yellow-200">
                            Em andamento
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-3 font-medium">#1233</td>
                        <td className="whitespace-nowrap px-4 py-3">Carlos Mendes</td>
                        <td className="whitespace-nowrap px-4 py-3">Reserva de salão de festas</td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-200">
                            Resolvido
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-3 font-medium">#1232</td>
                        <td className="whitespace-nowrap px-4 py-3">Mariana Costa</td>
                        <td className="whitespace-nowrap px-4 py-3">Barulho excessivo</td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-red-50 text-red-600 border-red-200">
                            Urgente
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap px-4 py-3 font-medium">#1231</td>
                        <td className="whitespace-nowrap px-4 py-3">Pedro Santos</td>
                        <td className="whitespace-nowrap px-4 py-3">Lâmpada queimada</td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-600 border-green-200">
                            Resolvido
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-purple-600" />
                  <h3 className="font-medium">Dashboard Administrativo</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-bold">Visão Geral de Chamados</h4>
                  <div className="flex items-center gap-2">
                    <AppleButton variant="outline" size="sm" className="h-8 gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                        <line x1="3" x2="21" y1="9" y2="9"></line>
                        <line x1="9" x2="9" y1="21" y2="9"></line>
                      </svg>
                      <span>Filtrar</span>
                    </AppleButton>
                    <AppleButton variant="outline" size="sm" className="h-8 gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M21 15V6"></path>
                        <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                        <path d="M12 12H3"></path>
                        <path d="M16 6H3"></path>
                        <path d="M12 18H3"></path>
                      </svg>
                      <span>Ordenar</span>
                    </AppleButton>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="h-[200px] w-full bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
                      <div className="w-1/12 bg-purple-200 dark:bg-purple-900 rounded-t-md h-[20%]"></div>
                      <div className="w-1/12 bg-purple-300 dark:bg-purple-800 rounded-t-md h-[30%]"></div>
                      <div className="w-1/12 bg-purple-400 dark:bg-purple-700 rounded-t-md h-[60%]"></div>
                      <div className="w-1/12 bg-purple-500 dark:bg-purple-600 rounded-t-md h-[40%]"></div>
                      <div className="w-1/12 bg-purple-600 dark:bg-purple-500 rounded-t-md h-[80%]"></div>
                      <div className="w-1/12 bg-purple-700 dark:bg-purple-400 rounded-t-md h-[70%]"></div>
                      <div className="w-1/12 bg-purple-800 dark:bg-purple-300 rounded-t-md h-[50%]"></div>
                    </div>
                    <div className="absolute top-4 left-4 text-sm font-medium">Chamados por categoria</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-sm font-medium">Distribuição por status</h5>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-20 relative">
                        <svg viewBox="0 0 36 36" className="h-20 w-20">
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-gray-200 dark:stroke-gray-700"
                            strokeWidth="4"
                          ></circle>
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-purple-600"
                            strokeWidth="4"
                            strokeDasharray="100"
                            strokeDashoffset="25"
                            transform="rotate(-90 18 18)"
                          ></circle>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">75%</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                          <span className="text-xs">Resolvidos</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <span className="text-xs">Em andamento</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <span className="text-xs">Urgentes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-sm font-medium">Tempo médio de resposta</h5>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-20 w-20 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-10 w-10 text-purple-600"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <div className="text-2xl font-bold">1.2h</div>
                        <div className="text-xs text-muted-foreground">Média de resposta</div>
                        <div className="flex items-center text-green-500 text-xs">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 mr-1"
                          >
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                          </svg>
                          <span>30% mais rápido que a média</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <AppleButton variant="primary" className="gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" x2="12" y1="3" y2="15"></line>
                    </svg>
                    <span>Exportar Relatório</span>
                  </AppleButton>
                  <AppleButton variant="outline" className="gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    <span>Configurações</span>
                  </AppleButton>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-950 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-white"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Notificações em tempo real</p>
                  <p className="text-sm text-muted-foreground">Acompanhe tudo pelo WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
