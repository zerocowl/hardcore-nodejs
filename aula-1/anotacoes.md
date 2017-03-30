# Comandos NPM e Configuração inicial do NodeJS

### Versionamento de projetos

>Dado um número de versão no padrão MAIOR.MENOR.PATCH, incremente:
 a MAIOR versão quando você introduz alterações incompatíveis na API,
a MENOR versão quando você adiciona funcionalidade de uma forma compatível com o que já existia (backwards-compatible), e
a versão do PATCH, quando você introduz correções compatíveis com o que já existia.
Etiquetas adicionais para informações de pré-release e dados de build estão disponíveis como extensões ao formato MAIOR.MENOR.PATCH. 

### Comandos basicos do npm

>``npm init`` => inicia a configuração de projeto(package.json) com base nas respostas

> `` npm start `` => executa o script na opção **start** do  _package.json_

> `` npm install `` => instala as dependecias do projeto listadas na opção **dependecies / devDependencies** do  _package.json_

> `` npm uninstall  [pkg]`` => remove completamente o modulo informado

> **Flags  npm**
>> `` -S /  --save `` salva nas dependencias do projeto   
>>`` -D / --save-dev`` salva nas dependecias de __DEV__ do projeto  
>>``-g / --global`` salva o modulo como __global__

