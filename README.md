# CazaBugsFinancieros – Prueba Técnica QA Automation

## Autor
**Iván Antonio Fajardo Castañeda**  
QA Automation Engineer

---

# 1. Contexto del Proyecto
Este repositorio contiene la solución a la **Prueba Técnica - QA Automation (Cazadora de Bugs Financieros)**.  
El objetivo es garantizar la calidad del producto ficticio **Ahorro Digital**, al cual se puede acceder desde una aplicación web del banco donde los usuarios pueden registrarse, iniciar sesión, simular ahorros y visualizar productos contratados.

---

# 2. Objetivos de Pruebas

## Objetivo General
Validar la funcionalidad, seguridad y experiencia de usuario del flujo de **Ahorro Digital**, mediante pruebas manuales y automatizadas.

## Objetivos Específicos
- Validar el flujo de registro y login de usuarios.
- Verificar el simulador de ahorro digital.
- Comprobar la visualización de productos contratados.
- Detectar defectos funcionales y de interfaz.
- Automatizar escenarios críticos con Playwright.

---

# 3. Descripción de la automatización

## Repositorio remoto 

- El repositorio contiene una carpeta llamada "docs" la cual contiene el documento de test plan y un archivo .xlsx con el diseño de los casos de prueba, se diseñan 10 casos de prueba para comodidad, teniendo en cuenta que se pueden diseñar muchos más
- Se utiliza visual studio code con el framework Playwright y typeScript como lenguaje, en el archivo playwright.config.ts se encuentra la configuración básica del proyecto donde se incluye navegador a usar, screenshot, video entre otras preferencias de ejecución.
- Se utiliza el patron de diseño page object model, por lo cual cada página del flujo se defina como una clase, la cual contiene cada locator definido y los métodos de interacción correspondientes.
- En la carpeta test se encuentra la subcarpeta pages donde se contiene el modelo de cada clase, y specs donde se definen los tests cases, se automatizan 5 tests basado en los diseños adjuntos.
- En dado caso que los test fallen, se almacenara el screenshot en la carpeta tes-results
- Tener en cuenta que se hizo la automatización apuntando a una página fictisia, por lo tanto los test van a fallar en su ejecución.
- Para el suministro de data, se usan en algunos test los scenario outline, se podría utilizar otro tipo de data por medio por ejemplo de faker, lectura de csv, json y demás.
- De acuerdo a no tener una documentación clara de como debe funcionar el sistema se realiza el ejercicio según mi entendimiento, quizá se podría aplicar common flows para reutilizar flujos y hacer más dinámica cada automatización.

## Ejecutar pruebas

```bash
npx playwright test
```

## Ejecutar con navegador visible

```bash
npx playwright test --headed
```

## Generar reporte HTML

```bash
npx playwright show-report
```
---
# Contacto

 Email: [iafajardoc@gmail.com]
 GitHub: [https://github.com/IvanFajardo15]

---
