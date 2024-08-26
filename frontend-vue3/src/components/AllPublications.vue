<script setup lang="ts"></script>

<template>
  <section>
    <v-container>
      <div class="apa-ref">
        <h4>MPDB 2.0 Release Article</h4>
        <p>
          Nazmul Hussain, Rony Chanda, Ruhshan Ahmed Abir, Mohsina Akter Mou, Md. Kamrul Hasan & M.
          Arif Ashraf. (2021). MPDB 2.0: a large scale and integrated medicinal plant database of
          Bangladesh.
          <em
            ><a
              href="https://bmcresnotes.biomedcentral.com/articles/10.1186/s13104-021-05721-6"
              target="_blank"
              >BMC Research Notes</a
            ></em
          >, 14, 301 (2021).
        </p>
      </div>
      <div class="apa-ref">
        <h4>MPDB Origininal Release Article</h4>
        <p>
          Ashraf, M. A., Khatun, A., Sharmin, T., Mobin, F., Tanu, A. R., Morshed, T., Fakir, T. A.,
          Begum, R. A., & Nabi, A. N. (2014). MPDB 1.0: a medicinal plant database of Bangladesh.
          <em
            ><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4110432/" target="_blank"
              >Bioinformation</a
            ></em
          >, 10(6), 384–386.
        </p>
      </div>
    </v-container>
  </section>
</template>

<style scoped lang="scss">
.apa,
.apa ul,
.apa ol,
.apa dl,
.ref-apa,
.ref-apa ul,
.ref-apa ol,
.ref-apa dl,
.apa-ref,
.apa-ref ul,
.apa-ref ol,
.apa-ref dl,
.refapa,
.refapa ul,
.refapa ol,
.refapa dl,
.aparef,
.aparef ul,
.aparef ol,
.aparef dl {
  padding-left: 0;
  margin-left: 0;
}

.apa li,
.ref-apa li,
.refapa li,
.apa-ref li,
.aparef li {
  list-style-type: none;
}

.apa p,
.apa li,
.apa dd,
.ref-apa p,
.ref-apa li,
.ref-apa dd,
.refapa p,
.refapa li,
.refapa dd,
.apa-ref p,
.apa-ref li,
.apa-ref dd,
.aparef p,
.aparef li,
.aparef dd {
  margin-left: 2em;
  text-indent: -2em;
  margin-top: 1em;
  margin-bottom: 1em;
}

a {
  color: rgb(var(--v-theme-primary));
  text-decoration-line: none;
}

a:hover {
  color: rgb(var(--v-theme-primary-lighten));
}
</style>
